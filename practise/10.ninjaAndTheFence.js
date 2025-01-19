function findNumberOfWays(n, k) {
  console.log(findWaysRec(n, k) % 1000000007);
  console.log(findWaysRecMem(n, k, {}) % 1000000007);
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

findNumberOfWays(4, 3);
