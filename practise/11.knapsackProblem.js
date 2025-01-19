function findMaxProfit(weights, values, maxWeight) {
  //   console.log(findProfit(weights.length - 1, weights, values, maxWeight));
  const cache = new Array(weights.length)
    .fill(0)
    .map((c) => new Array(maxWeight).fill(-1));
  console.log(findProfitBottomUpRec(0, 0, weights, values, maxWeight, cache));
}

function findProfit(pointer, weights, values, maxWeight) {
  if (pointer === 0) {
    if (weights[pointer] <= maxWeight) {
      return values[pointer];
    } else {
      return 0;
    }
  }

  // include call
  let include = 0;
  if (weights[pointer] <= maxWeight) {
    include =
      findProfit(pointer - 1, weights, values, maxWeight - weights[pointer]) +
      values[pointer];
  }

  // exclude call
  const exclude = findProfit(pointer - 1, weights, values, maxWeight);

  const result = Math.max(include, exclude);
  console.log({ pointer, maxWeight, result });
  return result;
}

function findProfitBottomUpRec(
  pointer,
  currentWeight,
  weights,
  values,
  maxWeight,
  cache
) {
  console.log({ pointer, currentWeight, maxWeight });
  if (pointer > weights.length - 1) {
    return 0;
  }

  if (currentWeight > maxWeight) {
    return -Infinity;
  }

  if (cache[pointer][currentWeight] !== -1) {
    return cache[pointer][currentWeight];
  }

  // include call
  const include =
    findProfitBottomUpRec(
      pointer + 1,
      currentWeight + weights[pointer],
      weights,
      values,
      maxWeight,
      cache
    ) + values[pointer];

  // exclude call
  const exclude = findProfitBottomUpRec(
    pointer + 1,
    currentWeight,
    weights,
    values,
    maxWeight,
    cache
  );

  const result = Math.max(include, exclude);
  cache[pointer][currentWeight] = result;
  return result;
}

const weights = [
  25, 4, 25, 49, 9, 11, 31, 5, 37, 7, 11, 47, 37, 1, 33, 25, 29, 11, 1, 41, 19,
  14, 43, 21, 1, 21, 23, 37, 12, 11, 45, 13, 36, 11, 17,
];
const values = [
  86, 55, 17, 31, 88, 82, 27, 57, 18, 1, 61, 56, 36, 82, 51, 85, 55, 21, 11, 76,
  91, 36, 85, 32, 99, 43, 41, 61, 41, 28, 83, 27, 35, 61, 16,
];

const maxWeight = 869;

// 1775
findMaxProfit(weights, values, maxWeight);
