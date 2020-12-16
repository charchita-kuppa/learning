
let nums1 = [1,3];
let nums2 = [2];

function findMedianSortedArrays(nums1, nums2) {

  let mergedArray =[];
  let m = nums1.length;
  let n = nums2.length;
  let min = nums2[0];
  let i = 0;
  let j = 0;
  

  while( i < m || j < n) {
    if(i === m && j !==n){
      mergedArray.push(nums2[j]);
      j++;
    }
    else if(i !== m && j === n){
      mergedArray.push(nums1[i]);
      i++;
    }
    else {
    if(nums1[m-1] <= nums2[0]){
      mergedArray.push(nums1[i]);
      i++;
    }
    else{
      if(nums1[i] <= min) {
        mergedArray.push(nums1[i]);
        if(i !== m)
        i++;
      }
      else{
        mergedArray.push(min);
        if(j !== n){
          j++;
          min = nums2[j];
        }
        

      }
    }

  }
}
    console.log(mergedArray);
    findMedianOfArray(mergedArray);
}

function findMedianOfArray(array) {

  let median = 0;

  if( array.length % 2 === 0 ){
    median = ( array[array.length/2] + array[(array.length/2) - 1] ) / 2;
  }

  if(array.length % 2 !== 0 ){
    median = array[(array.length-1)/2] ;
  }

  console.log('the median of array ' + array + ' is ' + median);

}

findMedianSortedArrays(nums1,nums2);