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
    if(node.left){
        this.#printCurrentNodeAndTravel(node.left, level +1);
    }
    if(node.right){
        this.#printCurrentNodeAndTravel(node.right , level + 1)
    }

    level --;
}


  print () {
    let currentNode = this.root;

    this.#printCurrentNodeAndTravel(currentNode,0);

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

    while(currentElement){
        if(currentElement.head === value){
            return true;
        }

        if(value > currentElement.head){
            currentElement = currentElement.right
        }else {
            currentElement = currentElement.left;
        }
    }

    return false;
  }
}

const bstree = new BST();

bstree.push(5);
bstree.push(3);
bstree.push(1);
bstree.push(4);
bstree.push(8);
bstree.push(6);
bstree.push(9)
// console.log(JSON.stringify(bstree));
// bstree.print();
console.log("INCLUDES 5 => ",bstree.includes(5));
console.log("INCLUDES 10 => ",bstree.includes(10));
console.log("INCLUDES 3 => ",bstree.includes(3));
console.log("INCLUDES 9 => ",bstree.includes(9));
console.log("INCLUDES -10 => ",bstree.includes(-10));