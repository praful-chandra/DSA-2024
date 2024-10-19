// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

function check(nums: number[]): boolean {
  let rotateIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      rotateIndex = i + 1;
      break;
    }
  }

  if (rotateIndex === 0) {
    return true;
  }

  const newArr = [...nums.slice(rotateIndex), ...nums.slice(0, rotateIndex)];

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log("[3,4,5,1,2] ==> ", check([3, 4, 5, 1, 2]));


function check_anotherway(nums: number[]): boolean {

    let rotateIndex = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if(rotateIndex > 0){
                return false;
            }
            rotateIndex = i + 1
        }
    }

    if(rotateIndex > 0 && nums[0] < nums[nums.length-1]){
        return false;
    }

    return true
};

console.log("Another way[3,4,5,1,2] ==> ", check_anotherway([3, 4, 5, 1, 2]));
