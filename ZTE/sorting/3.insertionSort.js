function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {

    let greatest = i;

    for(let j = i - 1 ; j >=0 ; j--){
        if(nums[j] > nums[i]){
            greatest = j
        }
    }
    const pickedItem = nums[i];
    nums.splice(i,1);
   nums.splice(greatest,0,pickedItem)
  }
  return nums;
}
console.log(insertionSort([89, 342, 39, 0, 8, 3, 2, 5, 9999]));
