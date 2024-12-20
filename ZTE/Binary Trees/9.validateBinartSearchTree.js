/**
 * 98. Validate Binary Search Tree
 * 
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

function isValidBST(root) {
  if (!root) {
    return true;
  }

  return checkValidBST(root, null, null);
}

function checkValidBST(node, lt, rt) {
  if (lt !== null && node.val >= lt) {
    return false;
  }

  if (rt !== null && node.val <= rt) {
    return false;
  }

  if (node.left) {
    if (!checkValidBST(node.left, node.val, rt)) {
      return false;
    }
  }

  if (node.right) {
    if (!checkValidBST(node.right, lt, node.val)) {
      return false;
    }
  }

  return true;
}
