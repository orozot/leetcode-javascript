/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }else{
        x = x+'';

        let list = x.split('')
        let reList = list.reverse();
        let reX = reList.join('');
        if(reX === x){
            return true
        }else{
            return false
        }
    }
};
//不使用字符串方法
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     let origin = x;
//     let ans = 0;
//     while(x != 0) {
//         ans = ans*10 + x%10;
//         x = parseInt(x/10);
//     }
//     return ans == origin ? true : false;
// };
