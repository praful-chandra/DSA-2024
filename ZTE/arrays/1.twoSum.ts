const nums = [1, 3, 7, 9, 2];
const target = 4;

function getIndexOfSum(nums: number[], target: number): number[] {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (cache.has(compliment)) {
      return [cache.get(compliment), i];
    } else {
      cache.set(nums[i], i);
    }
  }

  return [-1, -1];
}

console.log(
  `nums: ${nums} target: ${target} ==> ${getIndexOfSum(nums, target)}`
);
