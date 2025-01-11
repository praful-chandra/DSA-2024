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

  length() {
    return this.#length;
  }

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

function networkDelayTime(times, n, k) {
  const adjList = {};
  const weights = {};
  const minTimeList = {};

  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  times.forEach((pair) => {
    const source = pair[0];
    const target = pair[1];
    const weight = pair[2];

    adjList[source].push(target);
    weights[`${source},${target}`] = weight;
  });

  // heap -> [distance from source to node, nodeId]
  const heap = new PriorityQueue((a, b) => a?.[0] < b?.[0]);

  heap.insert([0, k]);

  while (heap.length() > 0) {
    const [timeToCurrentNode, currentNodeId] = heap.pop();

    if (minTimeList[currentNodeId]) continue;

    minTimeList[currentNodeId] = timeToCurrentNode;

    const adjNodes = [...adjList[currentNodeId]];
    while (adjNodes.length) {
      const nextNode = adjNodes.pop();
      if (minTimeList[nextNode]) continue;
      const weightToNextNode =
        weights[`${currentNodeId},${nextNode}`] + timeToCurrentNode;
      heap.insert([weightToNextNode, nextNode]);
    }
  }

  if (Object.values(minTimeList).length === n) {
    let maxTime = 0;
    Object.values(minTimeList).forEach((time) => {
      maxTime = Math.max(maxTime, time);
    });
    console.log(maxTime);
    return maxTime;
  }
  console.log(-1);
  return -1;
}

networkDelayTime(
  [
    [1, 2, 1],
    [2, 3, 2],
    [1, 3, 2],
  ],
  3,
  1
);
