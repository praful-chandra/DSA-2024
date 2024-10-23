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

console.log("ab#c - ad#c ===> ", backspaceCompare("ab#c", "ad#c"));
