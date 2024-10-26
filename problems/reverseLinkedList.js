// 206. Reverse Linked List

function reverseList(head) {
  let current = head;
  let temp = null;

  while (current !== null) {
    let holder = current.next;
    current.next = temp;
    temp = current;
    current = holder;
  }
  return temp;
}
