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


Student.prototype.getAverage = function (marks) {
  const average = this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item
    }
    
  })
  return average
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};