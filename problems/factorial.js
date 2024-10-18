function factorialOf(number) {
  let acc = 1;
  function multiplyWithAcc(baseNum) {
    acc *= baseNum;
    if (baseNum > 1) {
      return multiplyWithAcc(baseNum - 1);
    }
    return acc;
  }

  return multiplyWithAcc(number);
}

console.log("FACTORIAL 5 => ", factorialOf(5));
console.log("FACTORIAL 15 => ", factorialOf(15));
