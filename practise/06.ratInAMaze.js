// User function Template for javascript
/**
 * @param number[][] mat
 * @returns string[]
 */
class Solution {
  #directions = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  #directionLitrals = {
    0: "D",
    1: "L",
    2: "R",
    3: "U",
  };

  getNextDirectionPos(currentPos, direction) {
    if (direction >= 0 && direction <= 3) {
      return [
        currentPos[0] + this.#directions[direction][0],
        currentPos[1] + this.#directions[direction][1],
      ];
    }
    return currentPos;
  }

  traversePath(currentPos, currentPath, mat, ans, seenNodes) {
    if (currentPos[0] >= mat.length || currentPos[1] >= mat.length) {
      return -1;
    }
    if (
      currentPos[0] === mat.length - 1 &&
      currentPos[1] === mat[0].length - 1
    ) {
      ans.push([...currentPath]);
      return 1;
    }

    let direction = 0;
    while (direction < 4) {
      const nextDirPos = this.getNextDirectionPos(currentPos, direction);
      if (
        mat?.[nextDirPos[0]]?.[nextDirPos[1]] === 1 &&
        !seenNodes[`${nextDirPos[0]},${nextDirPos[1]}`]
      ) {
        currentPath.push(this.#directionLitrals[direction]);
        seenNodes[`${nextDirPos[0]},${nextDirPos[1]}`] = true;
        const pathExists = this.traversePath(
          nextDirPos,
          currentPath,
          mat,
          ans,
          seenNodes
        );
 
        seenNodes[`${nextDirPos[0]},${nextDirPos[1]}`] = false;
      }
      direction++;
    }
  }

  // Function to find all possible paths
  findPath(mat) {
    // code here
    let ans = [];
    this.traversePath([0, 0], [], mat, ans, {});
    console.log({ ans });
    return ans;
  }
}

const s = new Solution();

s.findPath([
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1],
]);
