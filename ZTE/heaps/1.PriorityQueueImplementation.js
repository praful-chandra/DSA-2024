class PriorityQueue {
  constructor(compareFn = (a, b) => a > b) {
    this._heap = [];
    this._compareFn = compareFn;
  }

  getSize() {
    return this._heap.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    return this._heap[0];
  }

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
    return this._compareFn(xInd, yInd);
  }
}
