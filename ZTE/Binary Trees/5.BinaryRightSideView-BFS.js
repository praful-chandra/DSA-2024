// 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

// Definition for a binary tree node.
//   class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//   }

function rightSideView(root) {
  let resultArr = [];
  let queue = [];

  if (!root) {
    return resultArr;
  }

  queue.push(root);

  while (queue.length) {
    let rightMostElem = null;
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const poppedElem = queue.shift();
      rightMostElem = poppedElem;
      if (poppedElem.left) {
        queue.push(poppedElem.left);
      }
      if (poppedElem.right) {
        queue.push(poppedElem.right);
      }
    }

    resultArr.push(rightMostElem.val);
  }

  return resultArr;
}
