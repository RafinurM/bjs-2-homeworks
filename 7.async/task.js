class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("error text");
    }
    if (this.alarmCollection.find((item) => item.id === id)) {
      console.log("Ошибка");
      return;
    }

    this.alarmCollection.push({ id, time, callback });
  }
  removeClock(id) {
    let index;
    const rem = this.alarmCollection.filter((item) => {
      if (item.id === id) {
        index = this.alarmCollection.indexOf(item);
        this.alarmCollection.splice([index], 1);
      }
    });
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : `${currentDate.getHours()}`;
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  start() {
    const checkClock = (alarmCollection) => {
      if (alarmCollection.time === this.getCurrentFormattedTime()) {
        alarmCollection.callback();
      }
    };
    if (this.timerId === null) {
      this.timerId = setInterval(
        () => this.alarmCollection.forEach(checkClock), 1000
      );
    }
  }

  stop() {
    if (this.timerId) {
        clearInterval(this.timerId)
        this.timerId = null
    }
  }
  printAlarms() {
    this.alarmCollection.forEach((item) => {
        console.log(`Будильник №${item.id} заведён на ${item.time}` )
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


// task 2

let testCase = new AlarmClock;
testCase.addClock('08:33',() => console.log('Wake up'), 1);
testCase.addClock('08:34',() => console.log('Wake up fast'), 2);
testCase.printAlarms();
console.log(testCase.alarmCollection)
testCase.removeClock(2);
testCase.addClock('08:35',() => console.log('Wake uppppp'), 3);
testCase.stop();
testCase.printAlarms();

