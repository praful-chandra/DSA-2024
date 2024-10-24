// "abcabcbb"

function getLongestSubstring(s: string): number {
  let maxLength = 0;

  let leftP = 0,
    rightP = 0;

  let seenVals = {};

  while (rightP < s.length) {
    const currentChar = s[rightP];

    if (seenVals[currentChar] >= 0 && seenVals[currentChar] >= leftP) {
      leftP = seenVals[currentChar] + 1;
    }

    const currentLength = rightP - leftP + 1;
    maxLength = Math.max(currentLength, maxLength);
    seenVals[currentChar] = rightP;
    rightP++;
  }

  return maxLength;
}

console.log("abcabcbb => ", getLongestSubstring("abcabcbb"));
