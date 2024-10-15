class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(data) {
    this.data[this.length++] = data;
  }

  get(index) {
    if (index === undefined) {
      throw Error("Index expected !");
    }

    if (index < 0 || index > this.length - 1) {
      throw Error("Invalid Index (" + index + ") Error !");
    }

    return this.data[index];
  }

  pop() {
    if (this.length < 1) {
      throw Error("Empty Array nothing to pop");
    }
    this.length -= 1;

    const lastElement = this.data[this.length];

    delete this.data[this.length];

    return lastElement;
  }

  shift() {
    if (this.length < 1) {
      throw Error("Empty Array nothing to Shift");
    }

    const newData = {};

    if (this.length > 1) {
      for (let i = 1; i < this.length; i++) {
        newData[i - 1] = this.data[i];
      }
    }
    const shiftedValue = this.data[0];
    this.length -= 1;
    this.data = newData;

    return shiftedValue;
  }

  delete(toDeleteIndex){
    if (toDeleteIndex === undefined) {
      throw Error("Index expected !");
    }

    if (toDeleteIndex < 0 || toDeleteIndex > this.length - 1) {
      throw Error("Invalid Index (" + toDeleteIndex + ") Error !");
    }

    const toDeleteValue = this.data[toDeleteIndex];

    for(let i = toDeleteIndex; i< this.length; i++){
        this.data[i] = this.data[i + 1];
    }

    if(this.length > 0){
      delete this.data[this.length - 1]
    }

    this.length -= 1;


    return toDeleteValue;

  }
}

const newArr = new CustomArray();

newArr.push("Q");
newArr.push("W");
newArr.push("E");
newArr.push("R");

console.log(newArr);
console.log("DELETED - ", newArr.delete(1));
console.log(newArr);
console.log("DELETED - ", newArr.delete(1));
console.log(newArr);
console.log("DELETED - ", newArr.delete(1));
console.log(newArr);
console.log("DELETED - ", newArr.delete(0));
console.log(newArr);
