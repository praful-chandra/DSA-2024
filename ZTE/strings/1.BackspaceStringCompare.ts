function backspaceCompare(s: string, t: string): boolean {
  const sStack: string[] = [];
  const tStack: string[] = [];
  for (let letter of s) {
    if (letter === "#") {
      sStack.pop();
    } else {
      sStack.push(letter);
    }
  }

  for (let letter of t) {
    if (letter === "#") {
      tStack.pop();
    } else {
      tStack.push(letter);
    }
  }

  let isSame = true;

  if (sStack.length !== tStack.length) {
    return false;
  }

  sStack.forEach((ls, lInd) => {
    if (ls !== tStack[lInd]) {
      isSame = false;
    }
  });

  return isSame;
}

function backspaceCompareOptimized(s: string, t: string): boolean {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    if (s[sPointer] === "#" || t[tPointer] === "#") {
      let backCount = 0;
      if (s[sPointer] === "#") {
        backCount = 2;
        while (backCount > 0) {
          sPointer--;
          backCount--;
          if (s[sPointer] === "#") {
            backCount += 2;
          }
        }
      }
      backCount = 0;
      if (t[tPointer] === "#") {
        backCount = 2;

        while (backCount > 0) {
          tPointer--;
          backCount--;
          if (t[tPointer] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[sPointer] !== t[tPointer]) {
        return false;
      }
      sPointer--;
      tPointer--;
      continue;
    }
  }

  return true;
}

console.log(
  "bxj##tw - bxo#j##tw ===> ",
  backspaceCompareOptimized("bxj##tw", "bxo#j##tw")
);
