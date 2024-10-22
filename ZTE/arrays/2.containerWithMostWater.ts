// Input = [7,1,2,3,9];

// bruteForce Approach

const input = [7, 1, 2, 3, 9];
const input2 = [6, 9, 3, 4, 5, 8];

function getMaxContainerArea(nums: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentContainerWidth = j - i;
      const currentContainerHeight = Math.min(nums[i], nums[j]);
      const currentContainerArea =
        currentContainerHeight * currentContainerWidth;

      maxArea = Math.max(maxArea, currentContainerArea);
    }
  }

  return maxArea;
}

function getMaxContainerAreaOptimized(nums: number[]): number {
  let maxArea = 0;

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const containerWidth = rightPointer - leftPointer;
    const containerHeight = Math.min(nums[leftPointer], nums[rightPointer]);
    const containerArea = containerHeight * containerWidth;

    maxArea = Math.max(containerArea, maxArea);

    nums[leftPointer] < nums[rightPointer] ? leftPointer++ : rightPointer--;
  }

  return maxArea;
}

console.log(`${input} ===> `, getMaxContainerArea(input));
console.log(`${input2} ===> `, getMaxContainerArea(input2));
console.log("============================================================");
console.log(`${input} ===> `, getMaxContainerAreaOptimized(input));
console.log(`${input2} ===> `, getMaxContainerAreaOptimized(input2));
