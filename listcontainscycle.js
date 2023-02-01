/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, visited = new Set()) {
    
    if (head === null) return false;
    if (visited.has(head)) return true;

    visited.add(head);
    return hasCycle(head.next, visited);

};Í