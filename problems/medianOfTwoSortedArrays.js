function findMedianSortedArrays(nums1, nums2) {
    let aCount = 0;
    let bCount = 0;

    let sortedArr = [];

    while (aCount < nums1.length && bCount < nums2.length) {
        if (nums1[aCount] < nums2[bCount]) {
            sortedArr.push(nums1[aCount]);
            aCount++;
        } else {
            sortedArr.push(nums2[bCount]);
            bCount++;
        }
    }

    while (aCount < nums1.length) {
        sortedArr.push(nums1[aCount]);
        aCount++;
    }
    while (bCount < nums2.length) {
        sortedArr.push(nums2[bCount])
        bCount++;
    }

    const finalLength = sortedArr.length;

    if (finalLength % 2 === 0) {
        let mid = finalLength / 2;
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;

    } else {
        return sortedArr[Math.trunc(finalLength / 2)];
    }
}

console.time('a');
console.log("[1,2]  [3,4]==> ", findMedianSortedArrays([1,2],[3,4])) 
console.timeEnd('a');
