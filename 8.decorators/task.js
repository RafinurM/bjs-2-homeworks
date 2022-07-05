function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = { hash: args.join("_"), value: func(...args) };
    let objectInCache = cache.find((item) => item.hash === hash.hash);
    let index = cache.findIndex((item) => item.hash === hash.hash);
    if (objectInCache !== undefined) {
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
    let result = func(...args);
    cache.push(hash);
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerId = null;
  let firstRun = true;
  return function (...args) {
    if (firstRun) {
      firstRun = false;
      func.apply(this, args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    }
  };
}

function debounceDecorator2(func, ms) {
  let timerId = null;
  let firstRun = true;
  let count = 0;
  return function (...args) {
    if (firstRun) {
      firstRun = false;
      func.apply(this, args);
      count += 1;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, ms);
      count += 1;
      console.log(count)
    }
  };
}


