// Implementation of priority queue

class PriorityQueue {
  #heap;
  #compareFn;
  #length;
  constructor(compareFn = (a, b) => a < b) {
    this.#heap = [];
    this.#length = 0;
    this.#compareFn = compareFn;
  }
  // ------- INTERNAL FUNCTIONS ------------
  #swapInHeap(indexA, indexB) {
    const temp = this.#heap[indexA];
    this.#heap[indexA] = this.#heap[indexB];
    this.#heap[indexB] = temp;
  }

  #compareInHeap(indexA, indexB) {
    return this.#compareFn(this.#heap[indexA], this.#heap[indexB]);
  }

  #getParentId(curId) {
    return Math.floor((curId - 1) / 2);
  }
  #getChildId(curId, direction) {
    // left child --> direction = 1
    // right child --> direction = 2
    return curId * 2 + direction;
  }

  #stepupFn() {
    let currentId = this.#length - 1;
    let parentId = this.#getParentId(currentId);

    while (currentId > 0 && this.#compareInHeap(currentId, parentId)) {
      this.#swapInHeap(currentId, parentId);
      currentId = parentId;
      parentId = this.#getParentId(currentId);
    }
  }

  #stepDown() {
    let currentId = 0;
    while (true) {
      const leftChildId = this.#getChildId(currentId, 1);
      const rightChildId = this.#getChildId(currentId, 2);

      const toCompareId = this.#compareInHeap(rightChildId, leftChildId)
        ? rightChildId
        : leftChildId;

      if (this.#compareInHeap(toCompareId, currentId)) {
        this.#swapInHeap(currentId, toCompareId);
        currentId = toCompareId;
      } else {
        break;
      }
    }
  }

  // --------- PUBLIC FUNCTIONS -------------

  print() {
    console.log(this.#heap, "LENGTH -> ", this.#length);
  }

  insert(val) {
    this.#length += 1;
    this.#heap.push(val);
    this.#stepupFn();
  }

  pop() {
    if (this.#length === 0) {
      return null;
    }
    this.#swapInHeap(0, this.#length - 1);
    const returnElem = this.#heap.pop();
    this.#length -= 1;
    this.#stepDown();
    return returnElem;
  }
}

const minHeapQueue = new PriorityQueue((a, b) => a?.[0] < b?.[0]);

minHeapQueue.print();
minHeapQueue.insert([0, 1]);
minHeapQueue.insert([5, 2]);
minHeapQueue.insert([1, 3]);
minHeapQueue.insert([2, 4]);
// minHeapQueue.insert();
// minHeapQueue.insert();
// minHeapQueue.insert();
// minHeapQueue.insert();
// minHeapQueue.insert();
// minHeapQueue.insert();
minHeapQueue.print();
console.log(minHeapQueue.pop());
// // minHeapQueue.print();
console.log(minHeapQueue.pop());
// // minHeapQueue.print();
console.log(minHeapQueue.pop());
// // minHeapQueue.print();
console.log(minHeapQueue.pop());
// minHeapQueue.print();
console.log(minHeapQueue.pop());
// minHeapQueue.print();
console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
// console.log(minHeapQueue.pop());
// minHeapQueue.print();
