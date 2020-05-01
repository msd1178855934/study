/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    root.max = 0;
    depth(root);
    return root.max;
};

function depth(root) {
  if (!root) return 0;
  let l = depth(root.letf);
  let r = depth(root.right);
  root.max = Math.max(root.max, l + r);
  return Math.max(l, r) + 1;
}
