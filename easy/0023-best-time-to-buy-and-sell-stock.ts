function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let cheapest = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i]
    } else if (prices[i] - cheapest > maxProfit) {
      maxProfit = prices[i] - cheapest
    }
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
