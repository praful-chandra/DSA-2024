// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

function chunk(arr, size) {
  const toReturnArr = [];

  for (let i = 0; i < arr.length; i += size) {
    toReturnArr.push(arr.slice(i, i + size));
  }

  return toReturnArr;
}

console.log("[Input: arr = [1,2,3,4,5], size = 1] => ", chunk([1, 2, 3, 4, 5],1));
console.log("[Input: arr = [1,2,3,4,5], size = 2] => ", chunk([1, 2, 3, 4, 5],2));
console.log("[Input: arr = [1,2,3,4,5], size = 3] => ", chunk([1, 2, 3, 4, 5],3));
console.log("[Input: arr = [1,2,3,4,5], size = 4] => ", chunk([1, 2, 3, 4, 5],4));
console.log("[Input: arr = [1,2,3,4,5], size = 5] => ", chunk([1, 2, 3, 4, 5],5));
console.log("[Input: arr = [1,2,3,4,5], size = 6] => ", chunk([1, 2, 3, 4, 5],6));
