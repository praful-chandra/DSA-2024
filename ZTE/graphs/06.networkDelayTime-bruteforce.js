function networkDelayTime(times, n, k) {
  const adjList = {};
  const minTimeList = {};
  new Array(n).fill(0).forEach((_, ind) => {
    adjList[ind + 1] = [];
    minTimeList[ind + 1] = 0;
  });
  const weights = {};

  times.forEach((grp) => {
    adjList[grp[0]] = [...adjList[grp[0]], grp[1]];
    weights[`${grp[0]},${grp[1]}`] = grp[2];
  });

  for (let node = 1; node <= n; node++) {
    if (node === k) continue;
    minTimeList[node] = Math.min(
      ...calculateMinTimeToTravelToTarget(k, node, adjList, weights, [], 0)
    );
  }

  let isAllNodesReached = true;
  let maxTime = 0;

  console.log(minTimeList);

  Object.entries(minTimeList).forEach(([nodeId, timeTaken]) => {
    if (parseInt(nodeId) !== k && timeTaken === Infinity) {
      isAllNodesReached = false;
    }
    if (Number(timeTaken) < Infinity) {
      maxTime = Math.max(maxTime, Number(timeTaken));
    }
  });

  if (isAllNodesReached) {
    return maxTime;
  }
  return -1;
}

function calculateMinTimeToTravelToTarget(
  currentId,
  targetId,
  adjList,
  weights,
  minTimes,
  currentTime
) {
  if (currentId === targetId) {
    minTimes.push(currentTime);
  }

  const adjNodes = adjList[currentId];

  for (let nd = 0; nd < adjNodes.length; nd++) {
    const nextNode = adjNodes[nd];
    const weightToNext = weights[`${currentId},${nextNode}`];
    calculateMinTimeToTravelToTarget(
      nextNode,
      targetId,
      adjList,
      weights,
      minTimes,
      currentTime + weightToNext
    );
  }

  return minTimes;
}

networkDelayTime(
  [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  4,
  2
);
