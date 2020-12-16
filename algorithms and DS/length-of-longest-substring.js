
function FindLengthOfLongestSubString(s) {
    
    let posMap = new Map();
    let currStart =0;
    let currLength =0;
    let subStringMaxLength = 0;
    let subStringStart = 0;
    let i;
   
    for(i=0; i < s.length; i++) {

      if(posMap.has(s[i])) {
        if(posMap.get(s[i]) >= currStart) {
          currLength = i - currStart;
        if(subStringMaxLength < currLength) {
            subStringMaxLength = currLength;
            subStringStart = currStart;
        }
        currStart = posMap.get(s[i]) + 1;

        }

        posMap.set(s[i], i);

      }
      else {
        posMap.set(s[i], i);
      }

    }

    if(subStringMaxLength <  (i - currStart) ) {
      
      subStringMaxLength = i - currStart;
      subStringStart = currStart;

    }
    
   
    console.log('the length of longest substring without repeating characters '+ subStringMaxLength  + ' and the substring is ' + s.substring(subStringStart, subStringStart + subStringMaxLength) );

  
    
}
let string = 'abcabcbbbeeeef'; 
FindLengthOfLongestSubString(string);


