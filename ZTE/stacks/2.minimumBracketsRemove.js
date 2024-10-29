function minRemoveToMakeValid(s) {
  let stack = [];

  let strArr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }
    if (s[i] === ")") {
      let lastStackElem = stack.pop();

      if (s[lastStackElem] !== "(") {
        strArr[i] = "_";
      }
    }
  }

  while (stack.length) {
    strArr[stack.pop()] = "_";
  }

  return strArr.join("").replaceAll("_", "");
}

console.log("))(( ====> ", minRemoveToMakeValid("))(("));
