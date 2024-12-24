// 994. Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

function getNextPos(currentPos, direction) {
  // 0 -> up
  // 1 -> right
  // 2 -> bottom
  // 3 -> left
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  return [
    currentPos[0] + directions[direction][0],
    currentPos[1] + directions[direction][1],
  ];
}

function orangesRotting(grid) {
  if (!grid.length || !grid[0].length) {
    return -1;
  }

  const rottenOranges = [];
  let freshOrangeCount = 0;
  let timeToRot = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        rottenOranges.push([row, col, 0]);
      }
      if (grid[row][col] === 1) {
        freshOrangeCount++;
      }
    }
  }

  while (rottenOranges.length) {
    const thisOrange = rottenOranges.shift();
    timeToRot = thisOrange[2];
    const currentPos = [thisOrange[0], thisOrange[1]];
    let direction = 0;
    while (direction < 4) {
      const nextPos = getNextPos(currentPos, direction);
      if (grid[nextPos[0]] && grid[nextPos[0]][nextPos[1]] === 1) {
        rottenOranges.push([...nextPos, thisOrange[2] + 1]);
        freshOrangeCount--;
        grid[nextPos[0]][nextPos[1]] = 2;
      }
      direction++;
    }
  }

  if (freshOrangeCount > 0) {
    return -1;
  }

  return timeToRot;
}
