/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let roadList = [];
    if(root === null){
        return []
    }else{
//         let list = [root];
//         let road = [];
//         while(list.length){

//             let item = list.pop();
//             road.push(item.val)
//             let listLeft = road;
//             if(item.right !== null){
//                 list.push(item.right);

//             }
//             if(item.left !== null){
//                 list.push(item.left)
//             }
//             if(item.left === null && item.right === null){
//                 let a = road.join('->');
//                 road = [root.val];
//                 roadList.push(a)
//             }
//         }
//         return roadList
        var returnList = []

        var path = function(item,str){
            let pathStr = str + item.val
            if(item.left !== null){
                path(item.left,pathStr+'->');

            }
            if(item.right !== null){
                path(item.right,pathStr+'->');
            }
            if(item.right === null && item.left === null){
                returnList.push(pathStr)
            }
        }
        path(root,"")
        return returnList

    }
};