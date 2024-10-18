class Node {
  constructor(value) {
    this.head = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  #printCurrentNodeAndTravel(node, level) {
    console.log(node.head, level);
    if (node.left) {
      this.#printCurrentNodeAndTravel(node.left, level + 1);
    }
    if (node.right) {
      this.#printCurrentNodeAndTravel(node.right, level + 1);
    }

    level--;
  }

  print() {
    let currentNode = this.root;

    this.#printCurrentNodeAndTravel(currentNode, 0);
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    }

    let currentElement = this.root;

    while (1) {
      if (currentElement.head > value) {
        if (!currentElement.left) {
          currentElement.left = newNode;
          return true;
        }
        currentElement = currentElement.left;
      } else {
        if (!currentElement.right) {
          currentElement.right = newNode;
          return true;
        }
        currentElement = currentElement.right;
      }
    }
  }

  includes(value) {
    let currentElement = this.root;

    while (currentElement) {
      if (currentElement.head === value) {
        return true;
      }

      if (value > currentElement.head) {
        currentElement = currentElement.right;
      } else {
        currentElement = currentElement.left;
      }
    }

    return false;
  }

  bfs() {
    const queue = [];
    const data = [];

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      data.push(node.head);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(data);
  }

  dfsPostOrder() {
    const stack = [];
    const data = [];

    const addToStack = (node) => {
      stack.push(node);
      if (node.left) {
        addToStack(node.left);
      }
      if (node.right) {
        addToStack(node.right);
      }
      const popped = stack.pop();
      data.push(popped.head);
    };
    addToStack(this.root);

    console.log(data);
  }

  dfsInOrder() {
    const stack = [];
    const data = [];

    const addToStack = (node) => {
      stack.push(node);
      if (node.left) {
        addToStack(node.left);
      }
      const popped = stack.pop();
      data.push(popped.head);
      if (node.right) {
        addToStack(node.right);
      }
    };

    addToStack(this.root);

    console.log(data);
  }
}

const bstree = new BST();

bstree.push(5);
bstree.push(3);
bstree.push(1);
bstree.push(4);
bstree.push(8);
bstree.push(6);
bstree.push(9);

bstree.dfsInOrder();
