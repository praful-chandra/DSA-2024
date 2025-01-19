// N and M, find number of primes required to make N
// only first M primes can be used

function findNumsOfPrime(n, m) {
  let primeNums = [];
  let num = 2;
  while (primeNums.length < m) {
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeNums.push(num);
    }
    num++;
  }
  //   const result = findMinCombination(n, primeNums, {});
  const resultTab = findMinComninationTab(n, primeNums);
  console.log({
    n,
    primeNums,
    //   result,
    resultTab,
  });
}

function findMinCombination(target, primeNums, cache) {
  if (target === 0) {
    return 0;
  }

  if (target < 0) {
    return Infinity;
  }
  if (cache[target] >= 0) {
    return cache[target];
  }
  let minResult = Infinity;
  for (let pointer = 0; pointer < primeNums.length; pointer++) {
    const include =
      findMinCombination(target - primeNums[pointer], primeNums, cache) + 1;
    minResult = Math.min(minResult, include);
  }
  //   console.log({ target, minResult });
  cache[target] = minResult;
  return minResult;
}

function findMinComninationTab(n, primeNums) {
  const dpArr = new Array(n + 1).fill(Infinity);
  dpArr[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let prime = 0; prime < primeNums.length; prime++) {
      const nextTarget = i - primeNums[prime];
      if (nextTarget > 0 && dpArr[nextTarget] !== Infinity) {
        dpArr[i] = Math.min(dpArr[i], dpArr[nextTarget] + 1);
      }
      if (nextTarget === 0) {
        dpArr[i] = 1;
      }
    }
    // console.log({ num: i, min: dpArr[i] });
  }
  return dpArr[n];
}

findNumsOfPrime(11, 3);
findNumsOfPrime(-1, -3);
