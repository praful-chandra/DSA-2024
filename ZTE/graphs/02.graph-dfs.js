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

function traverseDFS(graph, currentNode, resultList) {
  resultList.push(currentNode);
  graph[currentNode].forEach((node) => {
    if (!resultList.includes(node)) {
      traverseDFS(graph, node, resultList);
    }
  });

  return resultList;
}

console.log(traverseDFS(graph,0,[]))