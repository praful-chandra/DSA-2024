function findFibonachi(num) {
  let x = 0;
  let y = 1;
  for (let n = 0; n <= num; n++) {
    console.log(x);
    let temp = x;
    x = x + y;
    y = temp;
  }
}

const memo = {};

function findFiboRec(num) {
  if (memo[num] !== undefined) {
    return memo[num];
  }
  if (num < 2) {
    return num;
  }
  const result = findFiboRec(num - 1) + findFiboRec(num - 2);
  memo[num] = result;
  return result;
}

console.log(findFiboRec(100));

// let arr = [];
// findFiboRec(10, arr);
// console.log(arr);

// 0 1 1 2 3 5 8 13 21 34 55

// x = 0 , y = 1
// x = 1 , y = 1,
// x = 2 , y = 1,
// x = 3, y = 2
// x = 5, y = 3,
// x = 8 , y = 5
// x = 13 , y = 8,
// x =
