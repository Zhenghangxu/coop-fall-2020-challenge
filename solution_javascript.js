class EventSourcer {
  constructor() {
    this.value = 0;
  }
  isNumber(num) {
    if (typeof num === "number") {
      return num;
    } else {
    }
  }
  initMemory() {
    if (!this.memory) {
      this.memory = [];
      this.memory.push(this.value);
      this.currentIndex = 0;
    }
  }
  add(num) {
    this.isNumber(num);
    this.initMemory();
    this.value += num;
    this.memory.push(this.value);
    this.currentIndex = this.memory.length - 1;
  }
  subtract(num) {
    this.isNumber(num);
    this.initMemory();
    this.value -= num;
    this.memory.push(this.value);
    this.currentIndex = this.memory.length - 1;
  }
  undo() {
    this.initMemory();

    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.value = this.memory[this.currentIndex];
    } else {
    }
  }
  redo() {
    this.initMemory();
    if (this.currentIndex > 0 && this.currentIndex < this.memory.length - 1) {
      this.currentIndex += 1;
      this.value = this.memory[this.currentIndex];
    } else {
    }
  }
  bulk_undo(num) {
    this.initMemory();
    if (this.currentIndex > 0 && this.currentIndex - num >= 0) {
      this.currentIndex -= num;
      this.value = this.memory[this.currentIndex];
    } else {
    }
  }
  bulk_redo(num) {
    this.initMemory();
    if (
      this.currentIndex > 0 &&
      this.currentIndex + num <= this.memory.length
    ) {
      this.currentIndex += num;
      this.value = this.memory[this.currentIndex];
    } else {
    }
  }
}
const testObj = new EventSourcer();
// testObj.add(10);
// testObj.subtract(2);
// testObj.add(5);
testObj.undo();
// testObj.add(10);
// testObj.add(5);
// testObj.bulk_undo(3);
// testObj.bulk_redo(2);

// console.log(testObj.value);
// console.log(testObj.memory);

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
