function maximalSquare(matrix) {
    const cache = new Array(matrix.length).fill(-1).map(a => new Array(matrix[0].length).fill(-1));
   findMaxSquare([0, 0], matrix, cache);
    return Math.max(...cache.flat()) ** 2;
}

// returns the position of next direction from current position
function getNextDirPos(currPos, direction) {
    const directions = [
        // right
        [0, 1],
        // down right diagional
        [1, 1],
        // down
        [1, 0]
    ]
    const nextDirection = directions[direction]
    return [currPos[0] + nextDirection[0], currPos[1] + nextDirection[1]];
}

function findMaxSquare(currPos, matrix, cache) {

    if (currPos[0] > matrix.length - 1 || currPos[1] > matrix[0].length - 1) {
        return 0;
    }

    if (cache[currPos[0]][currPos[1]] !== -1) {
        return cache[currPos[0]][currPos[1]];
    }

    let currentMin = Infinity;

    let direction = 0
    while (direction < 3) {
        const nextPos = getNextDirPos(currPos, direction);
        const resultAtNextPos = findMaxSquare(nextPos, matrix, cache);
        currentMin = Math.min(currentMin, resultAtNextPos);
        direction++;
    }

    if (Number(matrix[currPos[0]][currPos[1]]) === 0) {
        cache[currPos[0]][currPos[1]] = 0;
        return 0;
    }

    const result = Number(matrix[currPos[0]][currPos[1]]) + Number(currentMin);
    cache[currPos[0]][currPos[1]] = result;
    console.log({ cache , currPos, result})

    return result;
}


console.log(maximalSquare([["1","1","0","1"],["1","1","0","1"],["1","1","1","1"]]))