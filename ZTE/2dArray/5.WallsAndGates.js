class Solution {
  /**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */

  _getNextPos(currentPos, direction) {
    // 0 - UP
    // 1 - Right
    // 2 - Down
    // 3 - Left
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

  _getElementAtPos(rooms, pos) {
    if (rooms[pos[0]]) {
      if (rooms[pos[0]][pos[1]] > -Infinity) {
        return rooms[pos[0]][pos[1]];
      }
    }
    return null;
  }

  wallsAndGates(rooms) {
    // write your code here

    const gates = [];

    for (let row = 0; row < rooms.length; row++) {
      for (let col = 0; col < rooms[row].length; col++) {
        const thisCell = rooms[row][col];
        if (thisCell === 0) {
          gates.push([row, col]);
        }
      }
    }
    gates.forEach((gate) => {
      console.log("GATE", gate);
      this._updateAllRoomsWithNearestStepVal(rooms, gate, 0);
      console.log("SOLUTION -- >", rooms);
    });
  }

  _updateAllRoomsWithNearestStepVal(rooms, thisPos, currentStep) {
    const currentElem = this._getElementAtPos(rooms, thisPos);

    if (
      currentElem &&
      currentElem !== 0 &&
      currentElem !== -1 &&
      currentElem > currentStep
    ) {
      rooms[thisPos[0]][thisPos[1]] = currentStep;
    }

    let direction = 0;
    while (direction < 4) {
      const nextPos = this._getNextPos(thisPos, direction);
      const elementAtNextPos = this._getElementAtPos(rooms, nextPos);
      if (
        elementAtNextPos &&
        elementAtNextPos !== 0 &&
        elementAtNextPos !== -1 &&
        elementAtNextPos > currentStep
      ) {
        this._updateAllRoomsWithNearestStepVal(rooms, nextPos, currentStep + 1);
      }
      direction++;
    }
  }
}

const newSolution = new Solution();

const problem = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

const problem2 = [
  [2147483647, 2147483647, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, 2147483647],
  [2147483647, 2147483647, 2147483647, 2147483647],
  [2147483647, 0, 2147483647, 2147483647],
];

newSolution.wallsAndGates(problem);
newSolution.wallsAndGates(problem2);
