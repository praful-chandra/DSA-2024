function subString(str) {
  const resultArr = [];
  findSubString(str, "", 0, resultArr);
  return resultArr;
}

function findSubString(str, result, pointer, acc) {
  if (pointer >= str.length) {
    if (result !== "") {
      acc.push(result);
    }
    return;
  }

  // exclude the elem in the result;
  findSubString(str, result, pointer + 1, acc);

  // Include the elem in the result;
  result = `${result}${str.charAt(pointer)}`;
  findSubString(str, result, pointer + 1, acc);
}

console.log(subString("abc"));
