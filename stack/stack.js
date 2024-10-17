class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  print() {
    let currentElement = this.top;
    const listedElements = [];
    while (currentElement) {
      listedElements.push(currentElement);
      currentElement = currentElement.next;
    }
    console.log("=============== PRINT =================");
    console.log(listedElements, "\nLENGTH => ", this.length);
    console.log("=============== PRINT END =================");
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.length += 1;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length += 1;
  }

  pop() {
    if (!this.length) {
      return null;
    }

    const toPopNode = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return toPopNode;
  }
}

const stk = new Stack();
stk.print();
stk.push(1);
stk.push(2);
stk.push(3);
stk.print();
console.log("POP => ", stk.pop());
stk.print();
