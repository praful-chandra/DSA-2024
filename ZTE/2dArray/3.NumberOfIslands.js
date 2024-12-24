// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


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

function numIslands(grid) {
  let currentPos = { x: 0, y: 0 };

  let seenPos = {};
  let count = 0;

  const maxX = grid.length;
  if (!maxX) {
    return 0;
  }
  const maxY = grid[0].length;
  if (!maxY) {
    return 0;
  }

  while (currentPos.x < maxX) {
    while (currentPos.y < maxY) {
      const thisElem = grid[currentPos.x][currentPos.y];
      if (thisElem === "1" && !seenPos[`${currentPos.x},${currentPos.y}`]) {
        let queue = [currentPos];
        while (queue.length) {
          let direction = 0;
          let thisPos = queue.shift();
          let nextPos = getNextPos(thisPos, direction);
          while (direction < 4) {
            if (
              grid[nextPos.x] &&
              grid[nextPos.x][nextPos.y] == "1" &&
              !seenPos[`${nextPos.x},${nextPos.y}`]
            ) {
              queue.push(nextPos);
              seenPos[`${nextPos.x},${nextPos.y}`] = true;
            }
            direction++;
            nextPos = getNextPos(thisPos, direction);
          }
        }
        count += 1;
      }

      currentPos.y++;
    }
    currentPos.x++;
    currentPos.y = 0;
  }

  return count;
}
