function binarySearch(nums, target) {
  console.log(
    `${nums} - target -> ${target} ===> ${splitAndCheck(
      nums,
      target,
      0,
      nums.length - 1
    )}`
  );
}

function splitAndCheck(nums, target, lo, hi) {
  if (lo > hi) {
    return null;
  }
  const midPoint = Math.trunc((hi + lo) / 2);
  if (nums[midPoint] === target) {
    return midPoint;
  }
  if (target > nums[midPoint]) {
    return splitAndCheck(nums, target, midPoint + 1, hi);
  } else {
    return splitAndCheck(nums, target, lo, midPoint - 1);
  }
}

binarySearch([1, 2, 3, 4, 5, 6], 60);
