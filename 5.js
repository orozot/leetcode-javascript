/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // var p = [],
    //      mx = 0,
    //      id = 0;
    //  var i;
    //  // 将字符串转化为奇数长度获取到新的字符串
    //  var newStr = '#';
    //  var len = str.length;
    //  for(i = 0;i<len;i++){
    //      newStr += str[i]+'#';
    //  }
    //  var newLen = newStr.length;
    //  for(i = 0;i<newLen;i++){
    //      p[i] = 0;
    //  }
    //  // 时间复杂度为O(n)，空间复杂度为O(1)获取到所有的子回文的长度值组成的数组
    //  for (i = 0;i < newLen; i++) {
    //      // mx表示当前边界值最大的回文子串的边界值
    //      p[i] = mx > i ? Math.min(p[2*id-i], mx-i) : 1;
    //      // 超出其半径的位置再做额外判断
    //      while ((newStr[i + p[i]] == newStr[i - p[i]]) && newStr[i + p[i]]){
    //          p[i]++;
    //      }
    //      // 获取到边界最大的回文子串的中心位置以及边界值，以保证后续迭代可以做以上快捷处理
    //      if (i + p[i] > mx) {
    //          id = i;
    //          mx = id + p[i];
    //      }
    //  }
    //  return p;
    var t = s.split("").join("#");
    var c = 1, e = 0, cs = 0;
    t = "~" + t + "#";

    for (var j = 1, lenj = t.length - 1; j < lenj; j++, c = 1) {
        while (t[j + c] === t[j - c]){
            c++;
        }

        if (c > e) {
            e = c;
            cs = j;
        }

    }

    var result = t.slice(cs - e + 1, cs + e).replace(/#/g, "").replace(/~/g, "");
    return result;

};
