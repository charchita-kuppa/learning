function isValidSudoku(array) {

  let validSet = new Set();
  var validRow;
  var validColumn;
  var validSubArray;
  
  if(array.length === 0){
    return false;
  }
  // To validate rows of sudoku
  for(let row = 0; row < array.length; row++) {
    validRow = checkValidity(array, validSet, row, 0, 'row');
   
     validSet.clear();

    if(!validRow) {
      break;
    }
  }
  
  //To validate columns of sudoku
  for(let column = 0; column < array.length; column++) {
    validColumn = checkValidity(array, validSet, column, 0,'column');
    console.log(validSet);
     validSet.clear();
  
    if(!validColumn) {
      break;
    }
  }

  //To validate sub-boxes of sudoku grid

  for(let row = 0; row < array.length ; row += 3) {
  for(let column =0 ; column < array.length; column += 3) {
       
      validSubArray = checkValiditySubArray(array, validSet, row,column);
       validSet.clear();
    if(!validSubArray){
      break;
    }
    }
    if(!validSubArray){
      break;
    }
  }
console.log(validRow, validColumn, validSubArray);
  if( validRow && validColumn && validSubArray){
    return true;
  } else{
    return false;
  }

}

function checkValidity(arr, validSet, m, n, string) {
  var valid = true;
 
  if(string === 'row'){
    for(let i = n; i < arr.length; i++) {
      if(arr[m][i] >= 1 && arr[m][i] <= 9) {
          if(validSet.has(arr[m][i])){
            valid = false;
            return valid;
          } else {
            validSet.add(arr[m][i]);
            valid = true;
          }
      }
    }
  } else {
    for(let i = n; i < arr.length; i++) {
      if(arr[i][m] >= 1 && arr[i][m] <= 9) {
          if(validSet.has(arr[i][m])){
            valid = false;
            return valid;
          } else {
            validSet.add(arr[i][m]);
            valid = true;
          }
      }
    }
  }
    
   
   return valid;
}

function checkValiditySubArray(arr,validSet,row,column) {

var valid = true;
for(let i = row; i < (row + 3); i++){
  for(let j = column; j < (column + 3); j++){
    if(arr[i][j] >= 1 && arr[i][j] <= 9) {
          if(validSet.has(arr[i][j])){
            valid = false;
            return valid;
          } else {
            validSet.add(arr[i][j]);
            valid = true;
          }

  }

}

}

return valid;
}

let array = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

isValidSudoku(array);


