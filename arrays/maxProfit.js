// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 1;  i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);

        const potentialProfit =  prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);

    }

    return maxProfit;
}


console.log("MAXPROFUT : ", maxProfit([7,1,5,3,6,4]))