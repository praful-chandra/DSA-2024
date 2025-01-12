// Dynamic programming
// 746. Min Cost Climbing Stairs - Topdown memoization approach

function minCostClimbingStairs(cost) {
  let res = findMinCostToClimb(cost, cost.length, 0, {});

  console.log({ res });
}

// cost = [], currentStep = lastStep in costsArray + 1, currentCost = 0
function findMinCostToClimb(cost, currentStep, currentCost, cache) {
  if (cache?.[currentStep] >= 0) {
    return cache[currentStep];
  }

  if (currentStep < 0) {
    return 0;
  }

  if (currentStep < 2) {
    return cost[currentStep];
  }

  const costOfCurrentStep =
    currentCost +
    Math.min(
      findMinCostToClimb(cost, currentStep - 1, cost[currentStep - 1], cache), //10
      findMinCostToClimb(cost, currentStep - 2, cost[currentStep - 2], cache) // 15
    );
  cache[currentStep] = costOfCurrentStep;
  return costOfCurrentStep;
}

minCostClimbingStairs([10, 15, 20, 30, 40]);
