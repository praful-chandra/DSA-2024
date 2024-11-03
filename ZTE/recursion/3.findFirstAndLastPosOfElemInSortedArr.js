function searchRange(nums, target) {
  return searchAndSplit(nums, target, 0, nums.length - 1);
}

function searchAndSplit(nums, target, lo, hi) {
  if (lo > hi) {
    return [-1, -1];
  }
  const midPoint = Math.trunc((lo + hi) / 2);
  if (nums[midPoint] === target) {
    let leftMostInd = midPoint;
    let rightMostInd = midPoint;

    while (leftMostInd > lo) {
      if (nums[leftMostInd - 1] === target) {
        leftMostInd -= 1;
      } else {
        break;
      }
    }

    while (rightMostInd < hi) {
      if (nums[rightMostInd + 1] === target) {
        rightMostInd += 1;
      } else {
        break;
      }
    }

    return [leftMostInd, rightMostInd];
  }

  if (target < nums[midPoint]) {
    return searchAndSplit(nums, target, lo, midPoint - 1);
  }

  return searchAndSplit(nums, target, midPoint + 1, hi);
}

console.log(
  " nums = [5,7,7,8,8,10], target = 8 === > ",
  searchRange([5, 7, 7, 8, 8, 10], 8)
);
