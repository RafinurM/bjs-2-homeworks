function parseCount(parseValue) {
  let parseResult = Number.parseInt(parseValue);
  if (!parseResult) {
    throw new Error("Невалидное значение");
  }
  return parseResult;
}

function validateCount(parseValue) {
  try {
    return parseCount(parseValue);
  } catch (error) {
    return error;
  }
}

// задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || c + a < b)
      throw new Error("Треугольник с такими сторонами не существует");
  }

  getPerimeter() {
    let perimeterResult = this.a + this.b + this.c;
    return perimeterResult;
  }

  getArea() {
    let halfPermtr = this.getPerimeter() / 2;
    let areaResult = Math.sqrt(
      halfPermtr *
        (halfPermtr - this.a) *
        (halfPermtr - this.b) *
        (halfPermtr - this.c)
    );
    return +areaResult.toFixed(3);
  }
}

function getTriangle(...args) {
    try {
        return new Triangle(...args);
      } 
      catch (e) {
        return {
          getPerimeter() {
            return "Ошибка! Треугольник не существует";
          },
          getArea() {
            return "Ошибка! Треугольник не существует";
          }
        };
      }
}

console.log(getTriangle(2,2,5))
