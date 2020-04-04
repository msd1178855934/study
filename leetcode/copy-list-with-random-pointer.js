/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  if (!head) return head;
  const clonedHead = new Node(head.val, null, null);
  let newHead = clonedHead;
  let oldHead = head;
  const map = new Map();
  map.set(oldHead, newHead);

  while (oldHead.next) {
    newHead.next = new Node(oldHead.next.val, null, null);

    newHead = newHead.next;
    oldHead = oldHead.next;

    map.set(oldHead, newHead);
  }

  oldHead = head;
  newHead = clonedHead;

  while (oldHead && newHead) {
    newHead.random = oldHead.random ? map.get(oldHead.random) : null;

    oldHead = oldHead.next;
    newHead = newHead.next;
  }

  return clonedHead;
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};
