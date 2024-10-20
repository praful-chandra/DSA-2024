//  283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums: number[]): number[] {
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < nums.length) {
    if (nums[pointer1] === 0) {
      if (nums[pointer2] !== 0) {
        let temp = nums[pointer1];
        nums[pointer1] = nums[pointer2];
        nums[pointer2] = temp;

        pointer1++;
      }
      pointer2++;
    } else {
      pointer1++;
      pointer2++;
    }
  }

  return nums;
}

console.log("[0,1,0,3,12] ===> ", moveZeroes([0, 1, 0, 3, 12]));
