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
  return bfs(root, [], 0);
}

function bfs(node, acc, level) {
  if (!node) {
    return acc;
  }
  let queue = [];
  if (!acc[level]) {
    acc[level] = [];
  }
  acc[level].push(node.val);
  queue.push(node.left);
  queue.push(node.right);

  level++;

  while (queue.length) {
    bfs(queue.shift(), acc, level);
  }

  return acc;
}
