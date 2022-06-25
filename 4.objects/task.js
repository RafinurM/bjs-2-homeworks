function Student(name, gender, age) {
  Object.assign(this, { name, gender, age });
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...rest) {
  this.marks = [...rest];
};

let average = 0;
Student.prototype.getAverage = function (marks) {
  this.marks.forEach((item) => {
    average = average + item
  })
  return average/this.marks.length 
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};