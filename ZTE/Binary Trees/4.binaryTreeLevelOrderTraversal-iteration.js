// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root) {
  if (!root) {
    return [];
  }

  const resultArr = [];
  let level = 0;
  let count = 0;
  const queue = [root];

  while (queue.length) {
    const thisNode = queue.shift();
    if (!resultArr[level]) {
      resultArr[level] = [];
    }
    resultArr[level].push(thisNode.val);
    level++;
    if (thisNode.left) {
      queue.push(thisNode.left);
    }
    if (thisNode.right) {
      queue.push(thisNode.right);
    }
  }

  return resultArr;
}
