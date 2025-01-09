function getSumOf(number) {
  if (number === 0) {
    return 0;
  }
  return number + getSumOf(number - 1);
}

console.log(getSumOf(10));
