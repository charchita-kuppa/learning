const mergesort = [];

function isValidArray(array1, array2){
  if (Array.isArray(array1) && Array.isArray(array2)) {
     if (array1.length === 0) {
       return array2;
     }
     if (array2.length === 0) {
       return array1;
     }

    array1.forEach(function (element) {
      if (typeof element !== 'number')
        console.log('invalid input');
    });
    array2.forEach(function (element) {
      if (typeof element !== 'number')
        console.log('invalid input');
    });


}
}
function pushElement(array,arrayIndex) {
  mergesort.push(array[arrayIndex]);

}

 
function mergeSortArrays(array1, array2) {
  console.log(array1, array2); 
  let array1Index = 0;
  let array2Index = 0;

  isValidArray(array1, array2);
  
    while ( (array1Index < array1.length) && (array2Index < array2.length) ) {
      if ( array1[array1Index] < array2[array2Index] ) {
        pushElement(array1, array1Index);
        array1Index++;
      } else {
        pushElement(array2, array2Index);
        array2Index++
      }
    }

    if(array1Index < array1.length) {
      while(array1Index < array1.length) {
        pushElement(array1, array1Index);
        array1Index++;

      }
    }
    else if(array2Index < array2.length) {
      while(array2Index < array2.length) {
        pushElement(array2, array2Index);
        array2Index++;
      }

    }
    
  
  
  return mergesort;
}

mergeSortArrays([4, 6, 30], []);
