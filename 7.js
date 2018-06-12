/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x+'';
    let list = str.split('');

    let result = ''
    if(list[0] === '-'){
        list = list.slice(1).reverse();
        while(list[0] == '0'){
            list = list.slice(1);

        }
        if(Number(list.join(''))>=2147483647){
            result = 0;
        }else{
            result = '-'+ list.join('');
        }



    }else{
        list = list.reverse();
        while(list[0] == '0'){
            list = list.slice(1);

        }
        if(Number(list.join(''))>=2147483647){
            result = 0;
        }else{
            result = list.join('');
        }


    }

    return Number(result);

};