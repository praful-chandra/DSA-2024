function bubbleSort(nums) {
    for(let i = 0 ; i< nums.length - 1 ; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i] > nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
}



console.log(bubbleSort([89,342,39,0,8,3,2,5,9999]))