/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !inorder || inorder.length === 0 || preorder.length === 0){
        return null
    }else{
        let root = preorder[0];
        let index = inorder.indexOf(root);
        let leftPreList = preorder.slice(1,index+1);
        let leftInList = inorder.slice(0,index);
        let rightPreList = preorder.slice(index+1);
        let rightInList = inorder.slice(index+1);
        let node = new TreeNode(root);
        node.left = buildTree(leftPreList,leftInList);
        node.right = buildTree(rightPreList,rightInList);
        return node
    }


};