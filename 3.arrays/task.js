function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else {
        result = false;
      };
    };
  } else {
    result = false;
  };

  return result;
}


function advancedFilter(arr) {
  let resultArr = arr
    .filter((arr) => arr > 0)
    .filter((arr) => arr % 3 === 0)
    .map((arr) => arr * 10);
  return resultArr; // array
}
