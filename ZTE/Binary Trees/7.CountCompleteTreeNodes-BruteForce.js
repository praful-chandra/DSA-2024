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

function countNodes(root) {
  if (!root) {
    return 0;
  }
  return countt(root, 0);
}

function countt(node, totalCount) {
  if (node.left) {
    totalCount = countt(node.left, totalCount);
  }
  if (node.right) {
    totalCount = countt(node.right, totalCount);
  }
  return (totalCount += 1);
}
