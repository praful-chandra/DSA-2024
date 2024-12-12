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

  const heightOfTree = getTreeHeight(root);
  const maxLastRowCount = Math.pow(2, heightOfTree - 1);

  if (maxLastRowCount <= 1) {
    return maxLastRowCount;
  }

  let left = 0;
  let right = maxLastRowCount - 1;

  while (left !== right) {
    let midPoint = Math.ceil((left + right) / 2);
    const valueAtMidPoint = getLastRowNodeAtIndex(
      root,
      midPoint,
      0,
      maxLastRowCount - 1
    );
    if (valueAtMidPoint !== null) {
      left = midPoint;
    } else {
      right = midPoint - 1;
    }
  }

  return maxLastRowCount + left;
}

const getTreeHeight = (node) => {
  let height = 0;
  while (node) {
    height++;
    node = node.left;
  }
  return height;
};

const getLastRowNodeAtIndex = (node, index, left, right) => {
  if (left === right) {
    return node?.val ?? null;
  }

  const midPoint = Math.ceil((left + right) / 2);

  if (index >= midPoint) {
    return getLastRowNodeAtIndex(node.right, index, midPoint, right);
  }

  if (index < midPoint) {
    return getLastRowNodeAtIndex(node.left, index, left, midPoint - 1);
  }
};
