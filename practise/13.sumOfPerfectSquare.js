class Solution {

   static #findMinSquares(n, rads,cache){
        if(n === 0){
            return 0;
        }

        if(cache[n] >=0){
            return cache[n];
        }
        let minCount = n;

        rads.forEach(r => {
           if(n - r ** 2 >= 0){
               const result = this.#findMinSquares(n -(r ** 2), rads,cache) + 1;
               minCount = Math.min(minCount, result);
           }
        })
        cache[n] = minCount;
        return minCount;
    }

    static #finSquaresTabulation(n){
        const dpArr = new Array(n+1).fill(Infinity);
        dpArr[0] = 0;
        dpArr[1] = 1;

        for(let num = 2; num<= n; num++){
            for(let rad = 1; rad ** 2 <= num; rad++){
                let reducedNum = num - rad ** 2;
                dpArr[num] = Math.min(dpArr[num], 1 + dpArr[reducedNum])
            }
        }

        return dpArr[n];
    }

    static  MinSquares(n) {
        // your code here
        let rads = [];
        let i = 1;

        while(i*i <= n){
            rads.push(i);
            i++;
        }

        console.log(this.#findMinSquares(n,rads,{}));
        console.log(this.#finSquaresTabulation(n));


    }
}

Solution.MinSquares(10);