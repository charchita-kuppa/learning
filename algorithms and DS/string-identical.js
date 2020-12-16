function stringIdenticalCount(string1, string2) {
  let charMap = new Map();
  let charCode = 0;
  let value =0;
  for(let i = 0; i < 128; i++) {
    charMap.set(i, 0);
  }
  for(let i =0; i < string1.length; i++){
    charCode = string1.charCodeAt(i);
    if(charMap.has(charCode)){
      value = charMap.get(charCode);
      value++;
      charMap.set(charCode, value);
    }
  }
  for(let i =0; i< string2.length; i++){
    charCode = string2.charCodeAt(i);
    if(charMap.has(charCode)) {
      value = charMap.get(charCode);
      value--;
      if(value < 0){
        return false;
      }
      charMap.set(charCode, value);
    }
  }
  return true;
}
stringIdenticalCount('god','odg');