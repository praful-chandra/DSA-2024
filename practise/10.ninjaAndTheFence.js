function findNumberOfWays(n, k) {
  console.log(findWaysRec(n, k) % 1000000007);
  console.log(findWaysRecMem(n, k, {}) % 1000000007);
  console.log(findWaysTab(n, k) % 1000000007);
  console.log(findWaysTabSpaceOptimized(n, k) % 1000000007);
}

function findWaysRec(n, k) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return k;
  }

  if (n === 2) {
    return k + k * (k - 1);
  }

  return findWaysRec(n - 2, k) * (k - 1) + findWaysRec(n - 1, k) * (k - 1);
}

function findWaysRecMem(n, k, cache) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return k;
  }

  if (n === 2) {
    return k + k * (k - 1);
  }

  if (cache[n] >= 0) {
    return cache[n];
  }

  cache[n] =
    findWaysRec(n - 2, k, cache) * (k - 1) +
    findWaysRec(n - 1, k, cache) * (k - 1);
  return cache[n];
}

function findWaysTab(n, k) {
  const dpArr = new Array(n + 1).fill(-1);

  dpArr[1] = k;
  dpArr[2] = k + k * (k - 1);

  for (let i = 3; i <= n; i++) {
    const result = dpArr[i - 1] * (k - 1) + dpArr[i - 2] * (k - 1);
    dpArr[i] = result % 1000000007;
  }

  return dpArr[n];
}

function findWaysTabSpaceOptimized(n, k) {
  let prev1 = k;
  let prev2 = k + k * (k - 1);

  for (let i = 3; i <= n; i++) {
    const result = prev1 * (k - 1) + prev2 * (k - 1);
    prev1 = prev2;
    prev2 = result % 1000000007;
  }

  return prev2;
}

findNumberOfWays(4, 3);
