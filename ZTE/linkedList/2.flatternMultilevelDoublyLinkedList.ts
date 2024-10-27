// 430. Flatten a Multilevel Doubly Linked List

// * Definition for _Node.
class _Node {
  val: number;
  prev: _Node | null;
  next: _Node | null;
  child: _Node | null;

  constructor(val?: number, prev?: _Node, next?: _Node, child?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flatten(head: _Node | null): _Node | null {
  let current: _Node | null = head;
  let nextStack: _Node[] = [];

  while (current) {
    if (current.child) {
      if (current.next) {
        nextStack.push(current.next);
      }
      current.next = current.child;
      current.child.prev = current;
    }
    current = current.next;
  }

  while (nextStack.length) {
    const nextElem = nextStack.pop();

    let currentNode: _Node | null = nextElem?.prev?.child ?? null;
    nextElem.prev.child = null;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = nextElem;
    nextElem.prev = currentNode;
  }

  return head;
}


function flattenRecursive(head: _Node | null): _Node | null {
    if (!head) {
        return head;
    }

    function flatternList(head, next) {
        let current = head;
        while (current) {
            if (current.child) {

                flatternList(current.child, current.next);
                current.next = current.child;
                current.child.prev = current;
                current.child = null;
            }
            if (current.next !== null) {

                current = current.next;
            } else {
                break;
            }
        }

        if (next) {
            current.next = next;
            next.prev = current;
        }
    }

    flatternList(head, null);

    return head;
};