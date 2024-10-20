// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function findMaxConsecutiveOnes(nums: number[]): number {
    let maxOnes = 0;
    let maxCurrent = 0
    nums.forEach(n => {
        if (n === 1) {
            maxCurrent++;
            if (maxCurrent > maxOnes) {
                maxOnes = maxCurrent;
            }
        } else {
            maxCurrent = 0;
        }
    })

    return maxOnes;
};


console.log("[1,0,1,1,0,1] => ",findMaxConsecutiveOnes)