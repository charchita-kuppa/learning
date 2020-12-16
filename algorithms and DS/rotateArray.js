// brute force
// this approach has O(n2) time complexity and O(1) space complexity
function rotateArray1(array, n){
  if(array.length === 0){
    return;
  }
  if((n % array.length) === 0 ){
       n = 0;
  }
if(n > array.length){
      n = n % array.length;
}
  let length = array.length;
  let temp;
  for(let k = 1; k <= n; k++){
    temp = array[0];
    array[0] = array[length - 1];
    shift(temp,array);
    //console.log(array);
  }
  console.log(array);
}

function shift(temp,array){
  let temp2;
  for(let i = 1 ; i < array.length; i++){
    temp2 = array[i];
    array[i] = temp;
    temp = temp2;
  }
}
let array1 = [-1,-100,3,99];
rotateArray1(array1, 2);

//approach with O(n) time complexity and O(n) space complexity

function rotateArray2(array,n) {
if(array.length === 0){
    return;
  }
  if((n % array.length) === 0 ){
       n = 0;
  }
if(n > array.length){
      n = n % array.length;
}
  let arr =[];
  for(let i = (array.length - n); i < array.length ; i++){
    arr.push(array[i]);
  }
  for(let i =0; i < (array.length - n); i++) {
    arr.push(array[i]);
  }
  console.log(arr);
}

let array2 = [1,2,3,4,5,6,7];
rotateArray2(array2, 2);

//approach with O(n) time complexity and O(1) space complexity

function rotateArray3(array,n){
if(array.length === 0){
    return;
  }
if((n % array.length) === 0 ){
       n = 0;
  }
if(n > array.length){
      n = n % array.length;
}

reverseArray(array,0,array.length - 1);
reverseArray(array,0, n-1);
reverseArray(array,n, array.length-1);
console.log(array);

}


function reverseArray(array,start,end){
  let temp;
  while(start < end) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  
 }

let array3 = [1,2,3,4,5,6]
rotateArray3(array3, 11);

//approach with Time complexity O(n) and O(1) extra space using cyclic dependency.

function rotateArray4(array, n){
  if(array.length === 0){
    return;
  }
  n = n % array.length;
  if(n === 0){
    n =0;
  }
  let current = 0;
  let prev = array[0];
  let next;
  let temp;
  let count = 0;
  for(let start = 0; count < array.length; start++){
    current = start;
    prev = array[start];
     do{
    next = (current + n) % array.length;
    temp = array[next];
    array[next] = prev;
    prev = temp;
    current = next;
    count++;
    }while(current !== start )
     
  }
   
   
   
   console.log(array);
 

}

let array4 = [1,2,3,4,5,6];
rotateArray4(array4, 11);