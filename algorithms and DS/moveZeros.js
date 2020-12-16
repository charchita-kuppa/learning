function moveZeros(array) {
   let index = 0;
   for(let i = 0 ; i < array.length; i++){     
      if(array[i] === 0){
        while((array[index] === 0) && (index < array.length - 1)){
          index++;  
        }
        swap(array, i, index);
      } else {
        index++;
      }     
   }
   console.log(array);
}

function swap(array, i, index) {
    let temp;
    temp = array[i];
    array[i] = array[index];
    array[index] = temp;
}

let array = [0,0,1,0,3,0,4,0];
moveZeros(array);