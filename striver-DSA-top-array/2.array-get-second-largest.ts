function getSecondLargest(arr) {
  let largestElem = arr[0];
  let secondLargestElem = -1;

  arr.forEach((elem) => {
    if (elem > largestElem) {
      secondLargestElem = largestElem;
      largestElem = elem;
    } else if (elem !== largestElem && elem > secondLargestElem) {
      secondLargestElem = elem;
    }
  });

  if (largestElem === secondLargestElem) {
    return -1;
  }

  return secondLargestElem;
}

console.log(
  "[28078 19451 935 28892 2242 3570 5480 231]",
  getSecondLargest([28078, 19451, 935, 28892, 2242, 3570, 5480, 231])
);
console.log("[10 10 10]", getSecondLargest([10, 10, 10]));
console.log("[10 5 10]", getSecondLargest([10, 5, 10]));
