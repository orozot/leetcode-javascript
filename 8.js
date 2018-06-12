/**
 * @param {string} str
 * @return {number}
 */

//low bee 办法
var myAtoi = function(str) {
    let str1 = str.trim();
    if(str1[0] === '+' && str1[1] !== '-'){
        str1 = str1.slice(1)
    }
    let list = str1.split('');


    if(list.length === 0 || (list[0] !== '-'&& isNaN(list[0]))){
        return 0
    }

    let addStr = list[0];
    let index = 0;
    list = list.slice(1);
    while(list[index] !== ' ' && !isNaN(list[index])){
        index++;
    }
    list = list.slice(0,index)
    let result = list.join('');

    result = ''+addStr+result;
    if(result === '-'){
        return 0
    }else if(Math.abs(Number(result)) > 2147483647){
        return addStr === '-'?-2147483648:2147483647
    }else{
        return Number(result)
    }
};

//骚操作
// var myAtoi = function(str) {
//     return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
// };