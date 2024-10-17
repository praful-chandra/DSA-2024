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
    return toPopNode.head;
  }
}

const validateIfpair = (current, popped) => {
  if (current === ")") {
    return popped === "(";
  }

  if (current === "}") {
    return popped === "{";
  }

  if (current === "]") {
    return popped === "[";
  }

  if (current === ">") {
    return popped === "<";
  }
};

const checkIfValidPharenthisis = (string) => {
  if (!string.length) {
    return true;
  }

  const stk = new Stack();
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];


    if (["(", "{", "[", "<"].includes(currentChar)) {
      stk.push(currentChar);
    }

    if ([")", "}", "]", ">"].includes(currentChar)) {
      if (!validateIfpair(currentChar, stk.pop())) {
        return false;
      }
    }

  }
  return stk.length === 0;
};

console.log("(){}[] ===> ", checkIfValidPharenthisis("(){}[]"));
console.log("([)] ===> ", checkIfValidPharenthisis("([)]"));
