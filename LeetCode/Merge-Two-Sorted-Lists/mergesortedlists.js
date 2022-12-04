/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 1 2 3
//     ^
// 1 3 4
//     ^
//
//merged: 1 1 2 3 3
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  
  if (list1 >= list2) {
    list2 = mergeTwoLists(list1, list2.next)
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
};