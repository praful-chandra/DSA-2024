class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
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

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length += 1;
      return;
    }

    this.bottom.next = newNode;
    this.bottom = newNode;
    this.length += 1;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }

    const toDequeueNode = this.top;
    if (!this.top.next) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return toDequeueNode;
    }

    this.top = this.top.next;
    this.length--;
    return toDequeueNode;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
console.log("DEQUEUE => ",q.dequeue());
q.print();