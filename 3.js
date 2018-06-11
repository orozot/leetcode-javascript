/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let list = s.split('');
    let _list = Array.from(new Set(list));
    let currentLength = 0;
    if(_list.length === 1){
        currentLength = 1
    }else{

        let hash = {};

        let max = 0;
        let start = 0;
        let end = 0;

        list.map((item,index)=>{
            if(hash[item] === undefined){
            hash[item] = {
                val:true,
                index:index
            }

            end = index;
        }else{
            start = hash[item]['index']+1;
            for(let val in hash){
                if(hash[val].index<hash[item]['index']){
                    delete hash[val];
                }
            }
            hash[item] = {
                val:true,
                index:index
            }
            end = index
        }
        let thisCurLength = end - start+1;
        if(currentLength<thisCurLength){
            currentLength = thisCurLength
        }
    })
    }

    return currentLength

};