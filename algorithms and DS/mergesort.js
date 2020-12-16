const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function mergeSort(array) {

  if(array.length === 1){
    return array;
  }

  let m = Math.floor(array.length/2);
  let left = array.slice(0,m);
  let right = array.slice(m);
  console.log(left,right);
   return merge(mergeSort(left),mergeSort(right));
  
}

function merge(left,right) {
  let maxsofar =0;
  let sum =0;
  let leftIndex =0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
     sum = sum + left[leftIndex] + right[rightIndex];
     leftIndex++;
     rightIndex++;
   if(sum > maxsofar){
     maxsofar = sum;
   }
  }
   return sum;
}

let array = mergeSort(numbers);

console.log(array);

