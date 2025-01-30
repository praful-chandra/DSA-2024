function findIfCycleExist (edges, n) {

    const adjList = {};
    const visitedNodes = {};
    const parentMapping = {};

    for(let node = 1; node<= n; node++){
        adjList[node] = [];
    }

    for(let edge = 0; edge<edges.length; edge++) {
        const nodeA = edges[edge][0];
        const nodeB = edges[edge][1];

        adjList[nodeA].push(nodeB);
        adjList[nodeB].push(nodeA);
    }

// traversal queue.
    const tQue = [];

    for(let nodeId = 1; nodeId <= n ; nodeId++){
        if (visitedNodes[nodeId]){
            continue;
        }
        tQue.push(nodeId);

        while( tQue.length ){
            const currentNode = tQue.shift();
            visitedNodes[currentNode] = true;
            const adjcentNodes = adjList[currentNode];
            for(let an = 0; an < adjcentNodes.length; an++){
                if(visitedNodes[adjcentNodes[an]]){
                    if(parentMapping[currentNode] === adjcentNodes[an]){
                        continue;
                    }
                    return "Yes";
                }

                parentMapping[adjcentNodes[an]] = currentNode;
                tQue.push(adjcentNodes[an]);
            }
        }
    }

    return "No"
}

console.log(findIfCycleExist([ 	[1,2], [3,2] ,[4,5] ,[6,5] ,[7,5] ,[7,8], [8,6], [9,8] 	], 9));