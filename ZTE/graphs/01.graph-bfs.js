const graph = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

function traverseBFS(graph) {
  if (!graph.length) {
    return [];
  }
  const queue = [0];

  const seenList = {};
  const outputList = [];
  while (queue.length) {
    const currentNode = queue.shift();
    seenList[currentNode] = true;
    outputList.push(currentNode);
    const adjcentNodes = graph[currentNode].filter((n) => !seenList[n]);
    queue.push(...adjcentNodes);
  }

  console.log(outputList);
}


traverseBFS(graph);