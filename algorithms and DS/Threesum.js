



function hastripletWithSum(arr, sum) {
   
  arr.sort(function(a,b) {
    return a - b;
  });

  for (let i = 0; i <= arr.length-2; i++) {
      if( i> 0 && (arr[i] === arr[i-1]) ) 
      continue;
    for (let j = i + 1; j <= arr.length-1; j++){
      /*if( j > i+1 && (arr[j] === arr[j-1]) ) 
      continue;*/
     for (let k = j + 1; k < arr.length; k++) {
      /*if( k > j+1 && (arr[k] === arr[k-1]) ) 
      continue;*/
      if (arr[i] + arr[j] + arr[k] === sum){
         console.log('the triplet that matches the target sum ');
          console.log([arr[i], arr[j], arr[k]]);
      }

    }
    }
  }


}



hastripletWithSum([-1, 0, 1, 2, -1, -4], 0);

/*if( arr[high] === arr[high - 1] )
      high--;
if( arr[low] === arr[low + 1]) 
      low++; */


//this solution takes O(n^2)
//when the array is still sorted array the time complexity can be improved to linear with folowing solution.

function hastripletWithSum1(arr,sum){
  //loop through array while low < high.add low index element with high index element.compare the result with target sum.If the result = target sum then return true.If the result > target sum,make high index as high index -1. if the result < target sum make the low index as low index + 1. 
  
  arr.sort(function(a,b) {
    return a - b;
  });
  for(let i=0; i< arr.length; i++){
    
    let low = i + 1;
    let high = arr.length - 1;
    
    if( i> 0 && (arr[i] === arr[i-1]) ) 
      continue;

    while(low < high){
    
    let result = arr[i] + arr[low] + arr[high];
    
    if(result === sum){
      console.log('the triplet that matches the target sum ');
      console.log([arr[i], arr[low], arr[high]]);
      low++;   
      high--;    
    }
    else if(result > sum)
      high--;   
    else
      low++;  
  }
  }
}

//hastripletWithSum1([-1, 0, 1, 2, -1, -4], 0);

//if the array is not sorted
/*function hasPairWithSum2(arr,sum){
  //create a new set that stores the sum - arr[i] value.check to see if this stored complement values are in the array if it there then return true else return false.
  let comp = new set();
  for(let i=0; i < arr.Length; i++){
    if(comp.has(arr[i])){
      return true;
    }
    if(arr[i] < sum){
      set.add(sum - arr[i]);
    }
    }
    return false;
}

hasPairWithSum2([1, 2, 3, 9], 8);
hasPairWithSum2([1, 2, 4, 4], 8);*/