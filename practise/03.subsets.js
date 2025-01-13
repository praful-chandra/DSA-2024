function subString(nums) {
  const resultArr = [];
  findSubSets(nums, [], 0, resultArr);
  return resultArr;
}

// function findSubSets(currentElem, result, rInd) {
//   if (!currentElem || currentElem.length === 0) {
//     return;
//   }

//   let i = 0;
//   while (i < currentElem.length) {
//     const newArr = [
//       ...currentElem.slice(0, i),
//       ...currentElem.slice(i + 1, currentElem.length),
//     ];
//     if (!result.includes(newArr)) {
//       result.push(newArr);
//     }
//     i++;
//   }

//   findSubSets(result[rInd + 1], result, rInd + 1);
// }

function findSubSets(nums, result, pointer, acc) {
  if (!nums[pointer]) {
    return acc.push(result);
  }

  // exclude the elem in the result;
  findSubSets(nums, result, pointer + 1, acc);

  // Include the elem in the result;
  result = [...result, nums[pointer]];
  findSubSets(nums, result, pointer + 1, acc);
}

console.log(subString([1, 2, 3]));
