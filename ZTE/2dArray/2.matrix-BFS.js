// 0 -> up
// 1 -> right
// 2 -> bottom
// 3 -> left

function getNextPos(pos, direction) {
  switch (direction) {
    case 0: {
      return { x: pos.x - 1, y: pos.y };
    }
    case 1: {
      return { x: pos.x, y: pos.y + 1 };
    }
    case 2: {
      return { x: pos.x + 1, y: pos.y };
    }
    case 3: {
      return { x: pos.x, y: pos.y - 1 };
    }
    default:
      return pos;
  }
}

function traverseBFS(matrix) {
  let pos = { x: 0, y: 0 };
  let posQueue = [];
  let resultArr = [];
  let seenPos = {};

  posQueue.push(pos);
  seenPos[`${pos.x},${pos.y}`] = true;
  resultArr.push(matrix[pos.x][pos.y]);
  while (posQueue.length) {
    const thisPos = posQueue.shift();
    let direction = 0;
    let nextPos = getNextPos(thisPos, direction);
    while (direction < 4) {
      if (
        matrix[nextPos.x] &&
        matrix[nextPos.x][nextPos.y] &&
        !seenPos[`${nextPos.x},${nextPos.y}`]
      ) {
        posQueue.push(nextPos);
        seenPos[`${nextPos.x},${nextPos.y}`] = true;
        resultArr.push(matrix[nextPos.x][nextPos.y]);
      }
      direction++;
      nextPos = getNextPos(thisPos, direction);
    }
  }

  return resultArr;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(traverseBFS(matrix));
