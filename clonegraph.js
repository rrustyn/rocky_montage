/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const visited = new Map();
    const q = [node];
    visited.set(node, new Node(node.val));

    while (q.length > 0) {
        let currNode = q.shift();

        for (let neighbor of currNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val));
                q.push(neighbor);
            }
            visited.get(currNode).neighbors.push(visited.get(neighbor));
        }
    }

    return visited.get(node);
};