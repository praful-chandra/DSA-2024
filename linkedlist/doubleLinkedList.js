class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  print() {
    let currentElement = this.head;
    const listedElements = [];
    while (currentElement) {
      listedElements.push(currentElement);
      currentElement = currentElement.next;
    }

    console.log(listedElements);
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail.next.previous = this.tail;
    this.tail = newNode;
  }

  pop() {
    if (!this.tail) {
      return null;
    }

    const toPopNode = this.tail;

    const potentialLastNode = this.tail.previous;

    potentialLastNode.next = null;
    this.tail = potentialLastNode;

    return toPopNode;
  }

  unshift(value){
    if(!this.head){
        return this.push(value);
    }
    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    return true;
  }

  shift(){
    if(!this.head){
        return null;
    }
    const toDeleteNode = this.head;

    this.head = this.head.next;
    this.head.previous = null;

    return toDeleteNode;
  }
}

const list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
console.log("POP => ",list.pop())
// list.print();
console.log("UNSHIFT 99 => ", list.unshift(99));
list.print();
console.log("SHIFT => ", list.shift());
list.print();
