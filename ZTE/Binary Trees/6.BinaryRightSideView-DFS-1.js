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
  if (!root) {
    return [];
  }

  return dfsRec(root, [], 0);
}

function dfsRec(node, result, level) {
  if (typeof result[level] !== "number") {
    result.push(node.val);
  }
  if (node.right) {
    dfsRec(node.right, result, level + 1);
  }
  if (node.left) {
    dfsRec(node.left, result, level + 1);
  }

  return result;
}
