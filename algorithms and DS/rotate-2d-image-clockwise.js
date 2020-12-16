function rotate2DImage(matrix) {
  var last,offset;
  var top,top_right,bottom,bottom_left;
  var size = matrix.length;
  
  // layer loop to rotate the layers
  for(let first = 0; first < (size / 2); first++) {
      last = (size - 1) - first;
      // element loop to move the all elements within the layer that need to be rotated
      for(let element = first ; element < last; element++) {
        
        offset = element - first;
        
        top = matrix[first][element];
        top_right = matrix[element][last];
        bottom = matrix[last][last-offset];
        bottom_left = matrix[last-offset][first];
        //top -> top_right
        matrix[element][last] = top;
        // top_right -> bottom
        matrix[last][last-offset] = top_right;
        //bootom -> bottom_left
        matrix[last-offset][first] = bottom;
        //bottom_left -> top
        matrix[first][element] = bottom_left;
      } 
  }
  console.log(matrix);
}
let matrix = [[1,2],[3,4]];
rotate2DImage(matrix);
rotate2DImage(matrix);
