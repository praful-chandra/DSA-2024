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

console.log(findMaxSubArraySum([2, 1, 4, 9]));
