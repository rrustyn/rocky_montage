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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const q = [[root, 0]];
    const values = [];

    while (q.length > 0) {

        let [node, level] = q.shift();

        if (node === null) continue;

        if (!values[level]) values[level] = []

        if (node.left !== null) {
            q.push([node.left, level + 1])
        }
        if (node.right !== null) {
            q.push([node.right, level + 1])
        }


        values[level].push(node.val);
    }

    return values;
}