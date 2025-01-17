function findMaxSubArraySum(arr) {
  return getMaxSum(arr, arr.length - 1, {});
}

function getMaxSum(arr, currentIndex, cache) {
  if (currentIndex < 0) {
    return 0;
  }

  if (currentIndex === 0) {
    return arr[0];
  }

  if (cache[currentIndex] >= 0) {
    return cache[currentIndex];
  }

  // include currentIndex to sum
  const includeSum =
    getMaxSum(arr, currentIndex - 2, cache) + arr[currentIndex];

  // exclude currnetIndex
  const excludeSum = getMaxSum(arr, currentIndex - 1, cache);

  const result = Math.max(includeSum, excludeSum);
  cache[currentIndex] = result;
  return result;
}

function getMaxSumTab(arr) {
  const arrLength = nums.length;

  const dpTable = new Array(arrLength).fill(-1);
  dpTable[0] = 0;
  dpTable[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const includeSum = nums[i] + dpTable[i - 1];
    const excludeSum = dpTable[i];

    dpTable[i + 1] = Math.max(includeSum, excludeSum);
  }

  return dpTable.pop();
}

function getMaxSumoptimizedSpace(arr) {
  let maxAt2 = 0;
  let maxAt1 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const includeSum = arr[i] + maxAt2;
    const excludeSum = maxAt1;

    maxAt2 = maxAt1;
    maxAt1 = Math.max(includeSum, excludeSum);
  }

  return maxAt1;
}

console.log(getMaxSumTab([2, 1, 4, 9]));
