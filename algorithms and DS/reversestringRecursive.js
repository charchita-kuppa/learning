
let string = 'yoyo mastery';
let i = string.length;
let newStr = [];
function reverseStrRecursive(str) {
  if(i < 0)
  return;
  
  newStr[(str.length) - i] = str.charAt(i);
  i--;
  reverseStrRecursive(str);
  return newStr.join('');
}


reverseStrRecursive(string);
//console.log(newStr.join(''));

  

