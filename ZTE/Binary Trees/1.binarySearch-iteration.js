function binarySearch(nums, target) {
  if (!nums.length) {
    return null;
  }
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
}

console.log(
  `${[1, 2, 3, 4, 5, 6]} - target -> ${4} ===> ${binarySearch(
    [1, 2, 3, 4, 5, 6],
    4
  )}`
);
