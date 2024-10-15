function reverseString(string) {
  const lengthOfString = string.length;

  let newStr = "";

  for (let i = lengthOfString - 1; i >= 0; i--) {
    newStr += string[i];
  }

  return newStr;
}

function reverseString1(string) {
  const strCpy = string.split("");
  const lengthOfString = strCpy.length - 1;

  for (let i = 0; i < lengthOfString; i++) {
    const lastIndex = lengthOfString - i;
    if (lastIndex <= i) {
      break;
    }
    const initialChar = strCpy[i];
    strCpy[i] = strCpy[lastIndex];
    strCpy[lastIndex] = initialChar;
  }
  return strCpy.join("");
}

function reverseNumber(number) {
  let newNumber = 0;
  while (number > 0) {
    newNumber = newNumber * 10;
    const lastDigit = number % 10;
    number = Math.trunc(number / 10);

    newNumber += lastDigit;
  }

  console.log(newNumber);
}

// console.log(reverseString1("Hell"))
// console.log(reverseString1("Apple"))

reverseNumber(5483);
