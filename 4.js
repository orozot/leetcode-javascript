/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    var len = nums1.length + nums2.length;
    var halfLen;
    if (len % 2 === 0) { //even
        halfLen = len / 2;
        return (findKth(nums1, 0, nums2, 0, halfLen) +
            findKth(nums1, 0, nums2, 0, halfLen + 1)) / 2;
    }
    else {
        halfLen = (len + 1) / 2;
        return findKth(nums1, 0, nums2, 0, halfLen);
    }
};

//find the Kth element from the 2 sorted arrays
function findKth(nums1, iStart, nums2, jStart, k) {
    //nothing left in nums1
    if (iStart >= nums1.length) return nums2[jStart + k - 1];
    //nothing left in nums2
    if (jStart >= nums2.length) return nums1[iStart + k - 1];
    //find the first element
    if (k == 1) {
        return Math.min(nums1[iStart], nums2[jStart]);
    }
    var halfK = Math.floor(k / 2);
    var iIndex = iStart + halfK - 1;
    var jIndex = jStart + halfK - 1;
    var v1 = iIndex < nums1.length ? nums1[iIndex] : Infinity;
    var v2 = jIndex < nums2.length ? nums2[jIndex] : Infinity;
    if (v1 >= v2) return findKth(nums1, iStart, nums2, jStart + halfK, k - halfK);
    else return findKth(nums1, iStart + halfK, nums2, jStart, k - halfK);
}

