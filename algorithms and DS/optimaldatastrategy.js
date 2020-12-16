function optimalDataStrategy(dataUsage,c,d) {
  let optimalCost = [];
  optimalCost[0] =0;
  optimalCost[1] =(d * dataUsage[0]);
  optimalCost[2] = d * ( dataUsage[0] +  dataUsage[1]);
  for(let i = 3; i < dataUsage.length; i++) {
  
   
      optimalCost[i] = Math.min(optimalCost[i-3]+ (3*c), optimalCost[i-1] + (d * dataUsage[i]));
    
  }
  
  return choosePlanAOrB(optimalCost, dataUsage,c,d);
}

function choosePlanAOrB(optimalCost, dataUsage,c,d){
  let dataStrategy = [];
  let i = dataUsage.length - 1;

  while(i >= 0 ){
    if(optimalCost[i] === ( optimalCost[i - 1] + (d * dataUsage[i]) ) ){
      dataStrategy[i] ='A';
      dataStrategy[i- 1] = 'A';
      dataStrategy[i -2] = 'A';
      i = i -3;
    } else {
      dataStrategy[i] ='B'
      i--;
    }
  }


  return dataStrategy;
}

let dataUsage = [4, 11, 7, 7, 12, 3, 2, 7, 14, 10, 6];
console.log("Optimal Data Strategy - Output : " + optimalDataStrategy(dataUsage, 8 , 1));