function trap(height: number[]): number {
  let maxTrappedWater = 0;

  for (let i = 1; i < height.length; i++) {
    let maxLeftHeight = 0;
    let maxRightHeight = 0;

    for (let j = i - 1; j >= 0; j--) {
      const currentValue = height[j];
      if (maxLeftHeight < currentValue) {
        maxLeftHeight = currentValue;
      }
    }

    for (let j = i + 1; j < height.length; j++) {
      const currentValue = height[j];
      if (maxRightHeight < currentValue) {
        maxRightHeight = currentValue;
      }
    }

    const waterTrappedUnderCurrent =
      Math.min(maxLeftHeight, maxRightHeight) - height[i];

    maxTrappedWater += Math.max(0, waterTrappedUnderCurrent);
  }
  return maxTrappedWater;
}

function trapOptimized(height: number[]): number {
  let maxTrapped = 0;

  let leftWallPointer = 0;
  let rightWallPointer = height.length - 1;

  let maxLeftWall = 0;
  let maxRightWall = 0;

  while (rightWallPointer > leftWallPointer) {
    const valLeft = height[leftWallPointer];
    const valRight = height[rightWallPointer];

    if (valLeft < valRight) {
      if (maxLeftWall < valLeft) {
        maxLeftWall = valLeft;
      } else {
        const waterTrappedAboveCurrent = maxLeftWall - valLeft;
        maxTrapped += waterTrappedAboveCurrent;
      }

      leftWallPointer++;
      continue;
    }

    if (maxRightWall < valRight) {
      maxRightWall = valRight;
    } else {
      const waterTrappedAboveCurrent = maxRightWall - valRight;
      maxTrapped += waterTrappedAboveCurrent;
    }
    rightWallPointer--;
    continue;
  }

  return maxTrapped;
}

console.log(
  "[0,1,0,2,1,0,1,3,2,1,2,1] ===> ",
  trapOptimized([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);
