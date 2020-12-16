// brute force
/*function firstRecurringChar(arr){
  let recurringChar = [];
  if(arr.length == 0) 
    return -1;
  else if(arr.length == 1)
    return 0;
  else {
  for(let i=0; i < arr.length; i++) {
    for(let j= i + 1; j < arr.length; j++ ) {
      if( arr[i] === arr[j]) {
        recurringChar.push(j);
        break;

      }

    }

  }
  if(recurringChar.length)
  return arr[Math.min(...recurringChar)]; 
  else
  return 0;
    }
}*/

function display_firstRecurringChar(result) {
if(result > 0) {
console.log('the first recurring char in [ '+ array + ' ] is ' + result);
}
else if(result < 0) {
console.log('the array is empty');
}
else {
console.log('there is no recurring char in [ '+ array + ' ]' );
}
  
}
let array =[1,2,2,1,3,4,3,4,5,5,6,6];

//display_firstRecurringChar(firstRecurringChar(array));


//the brute force approach has the time complexity O(n^2) and space complexity O(n)

//using hash map 
function firstRecurringChar1(arr){
  let mySet = new Set();
  if(arr.length == 0) 
    return -1;
  else if(arr.length == 1)
    return 0;
  else {
  for(let i=0; i < arr.length; i++) {
    
      if(mySet.has(arr[i])) {
        return arr[i];
        break;

      }
      else
       mySet.add(arr[i]);

    }
    if(mySet.size === arr.length) 
      return 0;
      
  

  }

}

display_firstRecurringChar(firstRecurringChar1(array));

