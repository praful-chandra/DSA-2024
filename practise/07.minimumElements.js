function minimumElements(coins, finalAmount) {
  const coinsArray = new Array(finalAmount + 1).fill(Infinity);
  coinsArray[0] = 0;

  for (let amount = 1; amount <= finalAmount; amount++) {
    const validCoins = coins.filter((c) => c <= amount);
    validCoins.forEach((vc) => {
      const remainingAmount = amount - vc;
      if (coinsArray[remainingAmount] !== Infinity) {
        coinsArray[amount] = Math.min(
          coinsArray[amount],
          coinsArray[remainingAmount] + 1
        );
      }
    });
  }

  console.log(coinsArray.pop());
}

minimumElements([1, 2, 3], 100);
