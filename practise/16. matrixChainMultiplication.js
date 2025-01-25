
const findMinOperations = (start, end, nums) => {
    if(start === end){
        return 0;
    }

    let min = Infinity;

    for(let k = start; k < end; k++){
        const result = ( nums[start-1] * nums[k] * nums[end] ) + findMinOperations(start, k,nums) + findMinOperations(k+1, end,nums);
        min = Math.min(min, result);
    }
    console.log({start,end, min})
    return min;

}
const nums = [10, 20, 30, 40, 50];

console.log(findMinOperations(1, nums.length -1 , nums));