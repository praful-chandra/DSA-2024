class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  print() {
    let currentElement = this.head;
    const listedElements = []
    while(currentElement){
        listedElements.push(currentElement)
        currentElement = currentElement.next;
    }

    console.log(listedElements);
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      return true;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return true;
  }

  pop() {
    let potentialLastElement = this.head;
    let currentElement = this.head;
    while (currentElement !== null) {
      if (currentElement.next === null) {
        break;
      }
      potentialLastElement = currentElement;
      currentElement = currentElement.next;
    }

    const lastElement = this.tail;

    potentialLastElement.next = null;
    this.tail = potentialLastElement;

    return lastElement;
  }

  unshift(value) {
    if (!this.head) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    return true;
  }

  shift() {
    if(!this.head){
        return undefined;
    }

    const nodeToDelete = this.head;

    this.head = this.head.next;

    return nodeToDelete;

  }

  getFirst () {
    if(!this.head){
        return undefined;
    }

    return this.head;
  }

  getLast () {
    if(!this.head){
        return undefined;
    }

    return this.tail;
  }

  getByIndex (index) {

    let element = this.head;

    for(let i = 0; i< index ; i++){
        if(!element){
            break;
        }
        element = element.next;
    }

    return element;
  }

  set(index,value) {
    const indexedElement = this.getByIndex(index);
    if(!indexedElement){
        return false;
    }

    indexedElement.head = value;

    return true
  }

  insert(index,value) {

    if(index === 0){
        return this.unshift(value);
    }

    const previousIndexedElement = this.getByIndex(index - 1);
    if(!previousIndexedElement){
        return false;
    }

    const newNode = new Node(value);
    newNode.next = previousIndexedElement.next;
    previousIndexedElement.next = newNode;

    return true;
  }

  getSize(){
    let length = 0;
    let currentElement = this.head;

    while(currentElement){
        length += 1;
        currentElement = currentElement.next;
    }

    return length;
  }

  clear(){
    this.head = null;
    this.tail = null;

    return true;
  }
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print()
console.log("SIZE => ", list.getSize())
console.log("INSERT - ", list.insert(1, 99))
list.print()
console.log("SIZE => ", list.getSize())
console.log("CLEAR => ", list.clear())

list.print();
console.log(list)

// console.log("POP => ", list.pop());
// console.log("UNSHIFT => ", list.unshift(99));
// console.log(list);
// console.log("SHIFT => ", list.shift());
// console.log("INDEX - 0", list.getByIndex(0));
// console.log("INDEX - 1", list.getByIndex(1));
// console.log("INDEX - 2", list.getByIndex(2));
// console.log("INDEX - 3", list.getByIndex(3));
// console.log("INDEX - 4", list.getByIndex(4));
// console.log("INDEX - 5", list.getByIndex(5));

