/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums || nums.length === 0){
        return null
    }else{
        let middle = Math.floor(nums.length/2);
        let leftArray = nums.slice(0,middle);
        let rightArray = nums.slice(middle+1);
        let node = new TreeNode(nums[middle]);
        node.left = sortedArrayToBST(leftArray);
        node.right = sortedArrayToBST(rightArray);
        return node
    }

};