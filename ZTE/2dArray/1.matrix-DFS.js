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

function traverseDFS(matrix, pos, seenPos, resultArr) {
  const thisElem = matrix[pos.x][pos.y];
  resultArr.push(thisElem);
  seenPos[`${pos.x},${pos.y}`] = true;

  let direction = 0;
  let nextPos = getNextPos(pos, direction);
  while (
    direction < 4 &&
    (!matrix[nextPos.x] ||
      !matrix[nextPos.x][nextPos.y] ||
      seenPos[`${nextPos.x},${nextPos.y}`])
  ) {
    direction++;
    nextPos = getNextPos(pos, direction);
  }
  if (direction < 4) {
    traverseDFS(matrix, nextPos, seenPos, resultArr);
  }
  return resultArr;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(traverseDFS(matrix, { x: 0, y: 0 }, {}, []));
