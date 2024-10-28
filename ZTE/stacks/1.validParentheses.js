const leftBrackets = ["(", "{", "["];
const rightBrackets = [")", "}", "]"];

const bracketPairs = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(s) {
  let stack = [];

  for (let i of s) {
    if (leftBrackets.includes(i)) {
      stack.push(i);
    }

    if (rightBrackets.includes(i)) {
      const poppedBracket = stack.pop();
      if (bracketPairs[i] !== poppedBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
