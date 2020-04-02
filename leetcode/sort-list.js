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
const sortList = function(head) {
  if (!head) return head;

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const partition1 = head;
  const tmp = slow;
  const partition2 = slow.next;
  tmp.next = null;

  if (partition2 == null) {
    return partition1;
  }
  let sorted1 = sortList(partition1);
  let sorted2 = sortList(partition2);

  const sortedRoot = new ListNode(null);
  let sorted = sortedRoot;
  while (sorted1 || sorted2) {
    const v1 = sorted1 != null ? sorted1.val : Infinity;
    const v2 = sorted2 != null ? sorted2.val : Infinity;
    if (v1 < v2) {
      sorted.next = sorted1;
      sorted1 = sorted1.next;
    } else {
      sorted.next = sorted2;
      sorted2 = sorted2.next;
    }
    sorted = sorted.next;
  }
  sorted.next = null;

  return sortedRoot.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
