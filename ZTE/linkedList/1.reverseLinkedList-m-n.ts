// 92. currentNode = currentNode.next;

// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) {
    return head;
  }

  let prevNode: null | ListNode = null;
  let startNode: null | ListNode = null;
  let endNode: null | ListNode = null;

  let currentNode: null | ListNode = head;
  let count = 1;

  while (currentNode) {
    if (count === left) {
      startNode = currentNode;
    }
    if (count === right) {
      endNode = currentNode;
    }
    if (!startNode) {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
    count++;
  }

  if (startNode === endNode) {
    return head;
  }

  let afterEnd: null | ListNode = endNode?.next ?? null;
  let thisPrev: null | ListNode = null;

  currentNode = startNode;
  while (currentNode && currentNode !== afterEnd) {
    const hold = currentNode.next;
    currentNode.next = thisPrev;
    thisPrev = currentNode;
    currentNode = hold;
  }

  if (prevNode) {
    prevNode.next = thisPrev;
  } else {
    head = endNode;
  }
  if (startNode) {
    startNode.next = afterEnd;
  }

  return head;
}

function reverseBetweenSinglePass(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let count = 1;
  let previousNode: ListNode | null = null;
  let currentNode: ListNode | null = head;
  while (count <= left) {
    if (count === left) {
      let startNode: ListNode | null = currentNode;
      let dummyPrevNode: ListNode | null = null;
      while (count <= right) {
        let temp: ListNode | null = startNode?.next ?? null;
        if (startNode) {
          startNode.next = dummyPrevNode;
        }
        dummyPrevNode = startNode;
        startNode = temp;
        count++;
      }
      if (previousNode) {
        previousNode.next = dummyPrevNode;
      } else {
        head = dummyPrevNode;
      }
      if (currentNode) {
        currentNode.next = startNode;
      }
      return head;
    }
    previousNode = currentNode;
    if (currentNode) {
      currentNode = currentNode.next;
    }
    count++;
  }
  return head;
}
