let directions = {
    "0,0": [-2, -1], // Top left
    "0,1": [-2, 1], // Top right
    "1,0": [-1, 2], // right Up
    "1,1": [1, 2], // right Bottom
    "2,0": [2, -1], // Down left
    "2,1": [2, 1], // down Right
    "3,0": [-1, -2], // left Up
    "3,1": [1, -2], // left Down
}
function getNextPosition(curPos, direction) {
    const nextDirGuide = directions[`${direction[0]},${direction[1]}`]
    return [curPos[0] + nextDirGuide[0], curPos[1] + nextDirGuide[1]];
}

function knightProbability(n, k, row, column) {
    if (k == 0) {
        return 1;
    }
    if (n < 3) {
        return 0;
    }
    const dpArr = new Array(k+1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(-1)))
    const result = findProbablity([row, column], n, k, dpArr);

};

function findProbablity(pos, n, stepsRemaining, cache) {
    if (pos[0] >= n || pos[1] >= n || pos[0] < 0 || pos[1] < 0) {
        return 0;
    }

    if (stepsRemaining === 0) {
        return 1;
    }

    if (cache[stepsRemaining][pos[1]][pos[0]] !== -1) {
        return cache[stepsRemaining][pos[1]][pos[0]];
    }

    let currProbab = 0;
    for (let cardDir = 0; cardDir < 4; cardDir++) {
        for (let orthoDir = 0; orthoDir < 2; orthoDir++) {
            const nextPos = getNextPosition(pos, [cardDir, orthoDir]);
            currProbab = currProbab + (findProbablity(nextPos, n, stepsRemaining - 1, cache) / 8);

        }
    }
    cache[stepsRemaining][pos[1]][pos[0]] = currProbab;
    return cache[stepsRemaining][pos[1]][pos[0]];
}