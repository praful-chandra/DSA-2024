function quickSort(nums, start, end) {
  if (start >= end) {
    return;
  }
  if (nums.length < 2) {
    return;
  }
  const pivot = sortThePivot(nums, start, end);
  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
}

function swapInArr(nums, pos1, pos2) {
  [nums[pos1], nums[pos2]] = [nums[pos2], nums[pos1]];
}

function sortThePivot(nums, start, end) {
  let pivot = start;
  let pivotPosition = start;
  for (let i = start; i <= end; i++) {
    if (nums[i] < nums[pivot]) {
      pivotPosition += 1;
    }
  }
  swapInArr(nums, pivot, pivotPosition);

  let i = start;
  let j = end;

  while (i < pivotPosition && j > pivotPosition) {
    while (nums[i] < nums[pivotPosition]) {
      i++;
    }
    while (nums[j] > nums[pivotPosition]) {
      j--;
    }
    if (nums[i] >= nums[j]) {
      swapInArr(nums, i, j);
      i++;
      j--;
    }
  }

  return pivotPosition;
}
const nums = [5, 3, 1, 6, 4, 2, -10, 100, 23, 778, 34, 89, -100];
console.log("BEFORE ===> ", nums);
quickSort(nums, 0, nums.length - 1);
console.log("SORTED ===> ", nums);
