/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  const list = [head];
  while (head.next != null) {
    head = head.next;
    list.push(head);
  }
  return list[Math.floor(list.length/2)];
};
