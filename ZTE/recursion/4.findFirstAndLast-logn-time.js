function searchRange(nums, target) {

    if (!nums.length) {
        return [-1, -1]
    }

    let midPointVal = binarySearch(nums, target, 0, nums.length - 1);
    if (midPointVal === -1) {
        return [-1, -1];
    }

    let leftPointer = midPointVal;
    let rightPointer = midPointVal;

    while (leftPointer >= 0) {
        const midVal = binarySearch(nums, target, 0, leftPointer - 1);
        if (midVal === -1) {
            break;
        }
        leftPointer = midVal;

    }
    while (rightPointer <= nums.length - 1) {
        const midVal = binarySearch(nums, target, rightPointer + 1, nums.length - 1);
        if (midVal === -1) {
            break;
        }
        rightPointer = midVal;

    }

    return [leftPointer, rightPointer];
};

function binarySearch(nums, target, lo, hi) {
    if (lo > hi) {
        return -1;
    }
    const midPoint = Math.trunc((lo + hi) / 2);
    if (nums[midPoint] === target) {
        return midPoint
    }
    if (nums[midPoint] < target) {
        return binarySearch(nums, target, midPoint + 1, hi);
    }
    return binarySearch(nums, target, lo, midPoint - 1)
}

console.log(
    " nums = [5,7,7,8,8,10], target = 8 === > ",
    searchRange([5, 7, 7, 8, 8, 10], 8)
  );
  