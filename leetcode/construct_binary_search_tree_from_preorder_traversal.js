/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    var i = 0;
    var process = (bound) => {
        if (i === preorder.length || preorder[i] > bound) return null;

        var node = new TreeNode(preorder[i++]);

        node.left = process(node.val);
        node.right = process(bound);

        return node;
    }

    return process(Number.MAX_SAFE_INTEGER);
}

var root = bstFromPreorder([8, 5, 1, 7, 10, 12]);
console.log(root)
