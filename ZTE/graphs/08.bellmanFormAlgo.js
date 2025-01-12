function minTimeTakenTotravelAllNodes(times, n, k) {
  //  adjList = { sourceId: [targetId, weight] }
  const adjList = {};
  const minTimeList = {};

  for (let i = 1; i <= n; i++) {
    minTimeList[i] = Infinity;
    adjList[i] = [];
  }

  minTimeList[k] = 0;

  times.forEach((pair) => {
    const source = pair[0];
    const target = pair[1];
    const weight = pair[2];

    adjList[source].push([target, weight]);
  });

  for (let i = 0; i < n; i++) {
    times.forEach((pair) => {
      const source = pair[0];
      const target = pair[1];
      const weight = pair[2];

      const potentialNextTargetTime = minTimeList[source] + weight;
      if (minTimeList[target] > potentialNextTargetTime) {
        minTimeList[target] = potentialNextTargetTime;
      }
    });
  }

  console.log({ minTimeList });
}

minTimeTakenTotravelAllNodes(
  [
    [1, 2, 6],
    [2, 5, -1],
    [5, 7, 3],
    [1, 3, 5],
    [3, 5, 1],
    [3, 2, -2],
    [1, 4, 5],
    [4, 3, -2],
    [4, 6, -1],
    [6, 7, 3],
  ],
  7,
  1
);
