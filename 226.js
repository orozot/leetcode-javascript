/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let list = [root];
    while(list.length !== 0){
        let item = list.shift();
        if(!item){
            continue;
        }
        [item.left,item.right] = [item.right,item.left];
        list.push(item.left,item.right)
    }
    return root
};