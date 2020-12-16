function firstUniqChar(string) {
  let visited = new Map();
  let value;
  let index;
  // initializing visited map with lowercase alaphabets as keys and values as 0's
  for(let i = 97; i <= 122; i++){
    visited.set(String.fromCharCode(i), 0);
  }
 
// loop through the string to update the value in map as number of occurences of characters in string
  for(let i = 0; i < string.length; i++) {
    if(visited.has(string[i])) {
      value = visited.get(string[i]);
      if(value > 0) {
        value++;
        visited.set(string[i],value);
      } else {
        visited.set(string[i],1);
      }
    }
  }

  // to return the index of first nonreapting character in string
  for(let i =0; i < string.length; i++){
    if(visited.has(string[i])){
       value = visited.get(string[i]);
       if(value === 1) {
         index = i;
       }
    }
  }
  if(index){
    return index;
  }
  else{
    return -1;
  }
}

console.log(firstUniqChar("aaaaaaaaaaaaaaaa"));