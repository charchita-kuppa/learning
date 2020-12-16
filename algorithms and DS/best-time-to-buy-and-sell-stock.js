function maxProfit(prices){
  let stock = -1;
  let maxProfitValue = 0;

  if(prices.length === 0) {
    return 0;
  }

  for(let i = 0; i < prices.length-1; i++){
      
      if(prices[i] > prices[i+1]) {
        if(stock >= 0){
          maxProfitValue = maxProfitValue + (prices[i] - stock);
          stock = -1 ;
        }

      }
      else{
        if(stock === -1){
          stock = prices[i];
        }
      }
  }
  if(stock >= 0){
    maxProfitValue = maxProfitValue + (prices[prices.length - 1] - stock);

  }
    return maxProfitValue;
}
let prices=[2,1,2,0,1];
console.log(maxProfit(prices));
