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
var findBottomLeftValue = function(root) {
    if(root !== null){
        let list = [root];
        let res = null;
        while(list.length){
            let item = list.shift();
            res = item.val;
            if(item.right !== null){
                list.push(item.right);
            }
            if(item.left !== null){
                list.push(item.left);
            }
        }

        return res

    }



};