// Given an array arr[] sorted in ascending order of size N and an integer K. Check if K is present in the array or not.



function searchInSorted(arr: number[], N: number, K: number) {
  const midPoint = Math.floor(N / 2);
  if(arr[midPoint] === K){
    return 1;
  }
  if (arr[midPoint] < K) {
    return searchInSorted(arr.slice(midPoint + 1), N - midPoint - 1, K);
  }
  if (arr[midPoint] > K) {
    return searchInSorted(arr.slice(0, midPoint), N - midPoint - 1, K);
  }

  return -1;
}

console.log(
  "[1,2,3,4,6] , N=5, K=6 ===>. ",
  searchInSorted([1, 2, 3, 4, 6], 5, 6)
);
console.log(
  "[1,2,3,4,6] , N=5, K=16 ===>. ",
  searchInSorted([1, 2, 3, 4, 6], 5, 16)
);
