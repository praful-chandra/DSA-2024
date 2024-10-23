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

  while (sPointer >= 0 && tPointer >= 0) {
    if (s[sPointer] !== "#" && t[tPointer] !== "#") {
      if (s[sPointer] !== t[tPointer]) {
        return false;
      }
      sPointer--;
      tPointer--;
      continue;
    }
    let backCount = 0;
    while (s[sPointer] === "#") {
      backCount++;
      sPointer--;
    }
    sPointer -= backCount;
    backCount = 0;
    while (t[tPointer] === "#") {
      backCount--;
      tPointer--;
    }
    tPointer -= backCount;
  }

  return true;
}

console.log("ab#c - ad#c ===> ", backspaceCompareOptimized("ab#c", "ad#c"));
