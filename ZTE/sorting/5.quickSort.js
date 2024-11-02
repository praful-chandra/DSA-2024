function quickSort(nums, lo, hi) {
  if (lo >= hi) {
    return;
  }
  console.log("BEFORE ===> ", nums);
  const piviotedIndex = sortThePivot(nums, lo, hi);
  quickSort(nums, 0, piviotedIndex - 1);
  quickSort(nums, piviotedIndex + 1, hi);

  console.log("AFTER ===> ", nums);
}

function sortThePivot(nums, lo, hi) {
  const length = lo + hi + 1;
  if (length < 2) {
    return nums;
  }

  let pivot = hi;

  let i = lo;
  let j = lo;

  while (j <= hi) {
    if (nums[j] < nums[pivot]) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
  const temp = nums[i];
  nums[i] = nums[pivot];
  nums[pivot] = temp;

  return i;
}

quickSort([5, 3, 1, 6, 4, 2], 0, 5);
