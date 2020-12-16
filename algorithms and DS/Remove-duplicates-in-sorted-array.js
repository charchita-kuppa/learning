
let array =[0,1,1,2,3,4];
function removeDuplicates(array) {

let index =0;
let i = 0;

while (i < array.length - 1) {
  // check whether at i has duplicates
  while( (i !== array.length - 1) && (array[i] === array[i + 1]) ){
    i++;
  }
  array[index] = array[i];
  index++;
  if(i !== array.length - 1){
    i++;
  }
}
 if(array[i - 1]  !== array[i]) {
   array[index] = array[i];
   index++;
 }
  return index;
}

let length = removeDuplicates(array);
console.log('the length of the new array is ' + length);
console.log('the array without duplicates is [ ' + array.slice(0, length) + ' ]');
