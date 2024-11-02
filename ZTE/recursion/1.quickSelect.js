function quickSelect(nums, pos) {
  return divideAndSortAndFindPos(nums, 0, nums.length - 1, pos - 1);
}

function divideAndSortAndFindPos(nums, lo, hi, pos) {
  while (lo <= hi) {
    const piviotedIndex = sortThePivot(nums, lo, hi);
    console.log({ piviotedIndex, lo, hi, pos, nums });
    if (pos === piviotedIndex) {
      return nums[piviotedIndex];
    }
    if (pos < piviotedIndex) {
      return divideAndSortAndFindPos(nums, 0, piviotedIndex - 1, pos);
    } else {
      return divideAndSortAndFindPos(nums, piviotedIndex + 1, hi, pos);
    }
  }
}

function sortThePivot(nums, lo, hi) {
  const length = lo + hi + 1;

  if (length < 2) {
    return lo;
  }
  const pivot = hi;

  let posPointer = lo;
  let searchPointer = lo;

  while (searchPointer < hi) {
    if (nums[searchPointer] < nums[pivot]) {
      swap(nums, posPointer, searchPointer);
      posPointer++;
    }
    searchPointer++;
  }
  swap(nums, posPointer, pivot);
  return posPointer;
}

function swap(nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

console.log(
  "SELECT (6) - [[5, 3, 1, 6, 4, 2]] ==> ",
  quickSelect([5, 3, 1, 6, 4, 2], 6)
);
