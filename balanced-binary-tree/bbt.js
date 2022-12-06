/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
  let maxHeightLeft = 0
  let maxHeightRight = 0

  if (root === null) return true;

  maxHeightLeft = findHeight(root.left);
  maxHeightRight = findHeight(root.right);
  console.log("right", maxHeightRight, "left", maxHeightLeft)

  if (Math.abs(maxHeightLeft - maxHeightRight) <= 1) {
      if (!isBalanced(root.left)) return false;
      if (!isBalanced(root.right)) return false;

  } else {
      return false;
  }

  return true
};

function findHeight(node, height = 0) {
  if (node === null) return height;
  console.log(height)
  return findHeight(node.left, height + 1) > findHeight(node.right, height + 1) ?
      findHeight(node.left, height + 1) : findHeight(node.right, height + 1);
}