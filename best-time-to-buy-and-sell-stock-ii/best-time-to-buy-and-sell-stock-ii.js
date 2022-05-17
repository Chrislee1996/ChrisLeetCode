/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//           let buyPrice = prices[0]
//           let max = 0 

//       for (let i =1 ; i < prices.length; i++) {

// //           i starts at 1 because we can't sell after we buy on the first day
//           const sellPrice = prices[i]
// //           when would be the best time to buy give that we were to sell on i? 
//           const profit = sellPrice - buyPrice
//           max = Math.max(max,profit)
//           buyPrice = Math.min(buyPrice, prices[i])
//       }
//     return max
    
    
//declare our profit to 0
//iterate through the array of stock prices
    //need to check if our current price is less than the price to the left so we can decide to sell or not
    //if so, we know we can sell and declare our profit as the sold price
    
    let profit = 0
    
    for (let i =1 ; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) {
            //       [7,1,5,3,6,4]      
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
    

};