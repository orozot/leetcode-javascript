/**
 * Created by renzh on 2018/7/17.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result  = [];
    let stack = [];

    if(root === null){
        return result
    }else{
        root.level = 0;

        let resultChilde = [];
        //resultChilde.push(root.val);
        stack.push(root);

        let prevNode = root;


        while(stack.length !== 0){

            let node = stack.shift();

            if(node.level !== prevNode.level || resultChilde.length === 0 ){
                if(node.level !== 0){
                    result.push(resultChilde);
                }

                resultChilde = [];
            }

            if(node.left !== null && node.left !== undefined){
                node.left.level = node.level+1;
                stack.push(node.left);
            }

            if(node.right !== null && node.right !== undefined){
                node.right.level = node.level+1;
                stack.push(node.right);
            }

            prevNode = node;
            resultChilde.push(node.val);

            if(stack.length === 0){
                result.push(resultChilde)
            }

        }

        return result;
    }
}
