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

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return findPotentialMaxDept(root, 1);
}

function findPotentialMaxDept(node, height) {
  if (!node) {
    return height;
  }

  let potentialRightHeight = height;
  let potentialLeftHeight = height;
  if (node.right) {
    potentialRightHeight = findPotentialMaxDept(
      node.right,
      potentialRightHeight + 1
    );
  }
  if (node.left) {
    potentialLeftHeight = findPotentialMaxDept(
      node.left,
      potentialLeftHeight + 1
    );
  }

  return Math.max(potentialRightHeight, potentialLeftHeight);
}
