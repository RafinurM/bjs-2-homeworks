// Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state = this.state * 1.5);
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2

function search(arr, str) {
  if (!arr.includes(str)) {
    return;
  } else {
    return str;
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let keyList, valueList;
    let resultKey, resultValue, result;

    this.books.some((item) => {
      keyList = Object.keys(item);
      valueList = Object.values(item);
      resultKey = search(keyList, type);
      resultValue = search(valueList, value);

      if (type === resultKey && value === resultValue) {
        return (result = item);
      } else {
        return (result = null);
      }
    });
    return result;
  }

  giveBookByName(bookName) {
    let findBook = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        findBook = this.books[i];
        this.books.splice([i], 1);
        return findBook;
      }
    }
    return findBook;
  }
}

// Задача 3

let items = [];
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (
      mark > 0 &&
      mark < 6 &&
      typeof mark === "number" &&
      typeof subject === "string"
    ) {
      if (this.marks[subject]) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      }
    } else {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
  }

  getAverageBySubject(subject) {
    const average = this.marks[subject].reduce((acc, item, idx, arr) => {
      if (idx === arr.length - 1) {
        return (acc + item) / arr.length;
      } else {
        return acc + item;
      }
    });
    return average;
  }

  getAverage() {
    let sum = 0;
    let result = 0;
    let totalLength = 0;
    for (let prop in this.marks) {
      let value = this.marks[prop];
      totalLength = totalLength + value.length;
      for (let i = 0; i < value.length; i++) {
        result = result + value[i];
      }
    }
    return result / totalLength;
  }

  exclude(reason) {
    delete this.marks;
    console.log(`Студент ${this.name} исключён за ${reason}`)
  }
}

