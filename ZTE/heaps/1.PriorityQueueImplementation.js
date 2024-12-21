class PriorityQueue {
  constructor(compareFn = (a, b) => a > b) {
    this._heap = [];
    this._compareFn = compareFn;
  }
  //   ----- PRIVATE METHODS ------------

  _getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  _getLeftChild(index) {
    return index * 2 + 1;
  }

  _getRightChild(index) {
    return index * 2 + 2;
  }

  _swap(xInd, yInd) {
    let temp = this._heap[xInd];
    this._heap[xInd] = this._heap[yInd];
    this._heap[yInd] = temp;
  }

  _compare(xInd, yInd) {
    return this._compareFn(this._heap[xInd], this._heap[yInd]);
  }

  _valAt(ind) {
    return this._heap[ind];
  }

  _shiftUp() {
    let thisElemInd = this.getSize() - 1;
    let parentInd = this._getParent(thisElemInd);

    while (thisElemInd && this._compare(thisElemInd, parentInd)) {
      this._swap(thisElemInd, parentInd);
      thisElemInd = parentInd;
      parentInd = this._getParent(thisElemInd);
    }
  }

  _shiftDown() {
    let elemInd = 0;
    let leftChildInd;
    let rightChildInd;
    let toSwapChildInd;

    function updateVals(ind) {
      leftChildInd = this._getLeftChild(ind);
      rightChildInd = this._getRightChild(ind);
      toSwapChildInd = leftChildInd;
      if (rightChildInd > 0 && rightChildInd < this.getSize()) {
        toSwapChildInd = this._compare(leftChildInd, rightChildInd)
          ? leftChildInd
          : rightChildInd;
      }
    }

    updateVals.bind(this)(elemInd);

    while (
      toSwapChildInd > 0 &&
      toSwapChildInd < this.getSize() &&
      this._compare(toSwapChildInd, elemInd)
    ) {
      this._swap(elemInd, toSwapChildInd);
      elemInd = toSwapChildInd;
      updateVals.bind(this)(elemInd);
    }
  }

  _getIndexForValue(val) {
    return this._heap.findIndex(val);
  }

  //   ----- PUBLIC METHODS ------------
  getSize() {
    return this._heap.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    return this._heap[0];
  }

  push(val) {
    this._heap.push(val);
    this._shiftUp();
    return this.getSize();
  }

  pop() {
    if (this.getSize() === 0) {
      return null;
    }
    const lastElemIndex = this.getSize() - 1;
    this._swap(0, lastElemIndex);
    const poppedVal = this._heap.pop();
    this._shiftDown();
    return poppedVal;
  }

  read() {
    console.log("HEAP ===> ", this._heap);
    return this._heap;
  }
}

const pQueue = new PriorityQueue();

pQueue.read();
pQueue.push(15);
pQueue.push(12);
pQueue.push(10);
pQueue.push(7);
pQueue.push(3);
pQueue.read();
// pQueue.pop();
// pQueue.read();
// pQueue.pop();
// pQueue.read();
pQueue.push(77);
pQueue.read();
