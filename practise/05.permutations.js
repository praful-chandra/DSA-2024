function permute(nums) {
  const ans = [];

  getPermute(nums, 0, ans);

  return ans;
}

function swapInArray(nums, ind1, ind2) {
  const temp = nums[ind1];
  nums[ind1] = nums[ind2];
  nums[ind2] = temp;
}

function getPermute(nums, ind, ans) {
  if (ind >= nums.length) {
    ans.push([...nums]);
    return;
  }

  for (let i = ind; i < nums.length; i++) {
    swapInArray(nums, ind, i);
    getPermute(nums, ind + 1, ans);
    swapInArray(nums, ind, i);
  }
}

console.log(permute([1, 2, 3]));
