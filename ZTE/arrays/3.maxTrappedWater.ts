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

  let leftWall = 0;
  let rightWall = 1;
  let blockedVolume = 0;

  while (rightWall < height.length) {
    if (
      height[rightWall] > height[leftWall] ||
      rightWall === height.length - 1
    ) {
      const containerHeight = Math.min(height[leftWall], height[rightWall]);
      const containerWidth = rightWall - leftWall - 1;
      const containerVolume = containerHeight * containerWidth - blockedVolume;

      maxTrapped += Math.max(0, containerVolume);

      console.log({
        leftWall,
        rightWall,
        containerVolume: containerVolume + blockedVolume,
        blockedVolume,
        maxTrapped,
      });

      leftWall = rightWall;
      rightWall++;
      blockedVolume = 0;
    } else {
      blockedVolume += height[rightWall];
      rightWall++;
    }
  }

  return maxTrapped;
}

console.log(
  "[0,1,0,2,1,0,1,3,2,1,2,1] ===> ",
  trapOptimized([0,1,0,2,1,0,1,3,2,1,2,1])
);
