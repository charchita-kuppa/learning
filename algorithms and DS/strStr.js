// brute force time complexity O(n2)
/*function strStr(haystack, needle) {
  let i = 0;
  let j = 0;
  let k =0;
  let count =0;
  let needleFound = false;
  if(needle.length === 0) {
    return 0;
  }
  if(haystack.length > needle.length) {
    while(i < haystack.length) {
      j = i;
      while(k < needle.length) {
      if(haystack[j] === needle[k]) {
          count++;
      } 
       k++;
       j++;
      } 
     
      if(count === needle.length) {
        console.log('needle is found in haystack ' + (j-count));    
        needleFound = true;  
      }
    
      count = 0;
      k =0;
      i++;

    }
    if(needleFound === false) {
      console.log(-1);
    }
  } else {
    console.log('cannot find a needle whose length is greater then haystack');
  }
}


let haystack = 'bacbabaabcbab';
let needle =    'abababca';
strStr(haystack, needle);*/


// string matching problem soling through KMP algorithm with time complexity O(n)

function stringMatch(string, pattern) {

  var lps = [];
  let i =0;
  let j =0;
  if(pattern.length === 0) {
    console.log(0);
  }

  patternMatchTable(pattern, lps);

  while(i < string.length){
    if(string[i] === pattern[j]){
      j++;
      i++;
      if(j === pattern.length) {
        console.log('pattern found at index ' + (i-j));
        j = lps[j - 1]
      }
    }
    else{
      if(j > 0){
        j = lps[j-1];
      } else {
        i++;
      }
    }

  }
}


function patternMatchTable(pattern, lps){
  let len = 0;
  let i = 1;
  lps[0] = 0;
  while(i < pattern.length){
      if(pattern[len] === pattern[i] ){
        len++;
        lps[i] = len;
        i++;
      } else {
        if(len > 0) {
          len = lps[len -1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
      
  }
}


let string = 'ABABDABACDABABCABAB';
let pattern = 'ABABCABAB';
stringMatch(string, pattern);