/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    let list = [];
    let index = 0;
    for(let item of nums){
        let num = target-item;
        if(obj[num] !== undefined && obj[num]['flag']){
            list = [obj[num]['index'],index]
            break;
        }else{
            obj[item] = {
                flag:true,
                index:index
            }
        }
        index++
    }
    return list
};