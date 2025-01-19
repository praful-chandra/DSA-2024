function findMaxProfit(weights, values, maxWeight) {
  console.log(findProfit(weights.length - 1, weights, values, maxWeight));
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

findMaxProfit([1, 2, 4, 5], [5, 4, 8, 6], 5);
