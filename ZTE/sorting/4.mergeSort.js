function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }

  let midPoint = Math.trunc(nums.length / 2);

  return merge(mergeSort(nums.slice(0,midPoint)),mergeSort(nums.slice(midPoint)))
}

function merge(num1, num2) {
  let sortedArr = [];

  let num1Count = 0;
  let num2Count = 0;

  while (num1Count < num1.length && num2Count < num2.length) {
    if (num1[num1Count] < num2[num2Count]) {
      sortedArr.push(num1[num1Count]);
      num1Count++;
    } else {
      sortedArr.push(num2[num2Count]);
      num2Count++;
    }
  }

  while (num1Count < num1.length) {
    sortedArr.push(num1[num1Count]);
    num1Count++;
  }
  while (num2Count < num2.length) {
    sortedArr.push(num2[num2Count]);
    num2Count++;
  }

  return sortedArr;
}


console.log(mergeSort([89,342,39,0,8,3,2,5,9999]))