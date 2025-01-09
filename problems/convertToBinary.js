function convertToBinary(numb) {
  console.log(getBinary(numb, ""));
}

function getBinary(n, result) {
  if (n === 0) {
    return result;
  }
  const remainder = n % 2;
  const newNumber = Math.floor(n / 2);
  console.log({ remainder, newNumber });
  return getBinary(newNumber, remainder + result);
}

convertToBinary(10);
