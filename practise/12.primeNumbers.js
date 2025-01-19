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
  const result = findMinCombination(n, primeNums, {});
  console.log({ n, primeNums, result });
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

findNumsOfPrime(11, 3);
