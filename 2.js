/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2,beforeAdd) {
    let current1 = l1;
    let current2 = l2;
    let thisAdd = 0;
    let thisBeforeAdd = beforeAdd||0
    let returnObj = {}
    if(current1 !== null && current2 !==null){
        let num = current1.val + current2.val;
        num = num + thisBeforeAdd;
        if(num < 10){
            thisAdd = 0
        }else{
            thisAdd = 1;
            num = num - 10;
        }
        returnObj = new ListNode(num)
        if(current1.next === null && current2.next !== null){
            returnObj.next = addTwoNumbers({val:0,next:null},current2.next,thisAdd)
        }else if(current1.next !== null && current2.next === null){
            returnObj.next = addTwoNumbers(current1.next,{val:0,next:null},thisAdd)
        }else if(current1.next === null && current2.next === null){
            if(thisAdd === 1){
                returnObj.next ={
                    val:1,
                    next:null
                }
            }else{
                returnObj.next = null;
            }
        }else{
            returnObj.next = addTwoNumbers(current1.next,current2.next,thisAdd,returnObj.next)
        }


    }
    return returnObj
};