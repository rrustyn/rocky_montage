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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    //function nodeDepth left and nodeDepth right
    function dfs(node) {
        if (node === null) {
            return 0;
        }

        let depthL = dfs(node.left);
        let depthR = dfs(node.right);
        let height = Math.max(depthL, depthR);
        let diameter = depthL + depthR;

        maxDiameter = diameter > maxDiameter ? diameter : maxDiameter;

        return height + 1;
    }

    dfs(root);
    
    return maxDiameter;
};