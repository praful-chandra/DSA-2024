function selectionSort(nums){
    for(let i = 0; i < nums.length -1; i ++){
        let smallest = i;
        for(let j = i+1; j< nums.length; j++){
            if(nums[smallest] > nums[j]){
                smallest = j;
            }
        }

        let temp = nums[smallest];
        nums[smallest] = nums[i];
        nums[i] = temp;
    }

    return nums;
}

console.log(selectionSort([89,342,39,0,8,3,2,5,9999]))