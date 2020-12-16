let nums1 = [4,9,5];
let nums2 =[9,4,9,8,4];
//for sorting the arrays with O(nlogn) time complexity
function quickSort(arr,low,high) {

  var partitionIndex;
 

  if(low < high){
  partitionIndex = partition(arr, low, high);

  quickSort(arr, low, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, high);
  }
    return arr;
}

function partition(arr, low, high) {

  var pivotValue = arr[high];
  var partitionIndex = low;

  for(let j = low; j < high; j++) {

    if(arr[j] < pivotValue){
      swap(arr, j, partitionIndex);
      partitionIndex++;
    }

  }  
  swap(arr, high, partitionIndex);
  return partitionIndex;
}

function swap(arr, index1,index2) {
  
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

}




class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
    this.count = 1;
  }
}

class BST {
  constructor(){
    this.root = null;
    
  }

  insert(value){
    let newNode =  new Node(value);
    if(this.root === null){
      this.root = newNode;
    }
    else{
      this.insertOtherNodes(this.root,value);
    }
  }
    insertOtherNodes(node,value){
      if(node === null){
        return;
      }
      if(value <= node.value){
        if(value === node.value){
            node.count++;
        }
        else if(node.left !== null){
          this.insertOtherNodes(node.left, value);
        }
        else{
            node.left = new Node(value);
        }
      }
      if(value > node.value){
        if(node.right !== null){
          this.insertOtherNodes(node.right, value)
        }
        else{
          node.right = new Node(value);
        }
      }
    }

    lookup(value){
      let currentNode = this.root;
      while(currentNode !== null && currentNode.value !== value){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        }
        else{
          currentNode = currentNode.right;
        }
      }
      if(currentNode !== null && currentNode.value === value){
        return currentNode;
      }
      else{
        return null;
      }
      
    }

}

function intersectionArray(nums1,nums2){
let intersection = [];
let tempNode = new Node(0);
let count = 1;
let myBST = new BST();
if(nums1.length <= nums2.length){
    for(let i = 0; i < nums1.length; i++){
        myBST.insert(nums1[i]);
    }
 
    for(let j = 0; j < nums2.length; j++){
      
      tempNode = myBST.lookup(nums2[j]);
      while(nums2[j] === nums2[j+ 1]){
          count++;
          j++;
      }
      if(tempNode !== null){
        if(tempNode.count === count){
          insertArray(intersection, count,tempNode.value);
          }
          else{
            insertArray(intersection, Math.min(tempNode.count, count),tempNode.value);
          }
      }

        count = 1;
    }

}
else{
    for(let j = 0; j < nums2.length; j++){
        myBST.insert(nums2[j]);
    }
    for(let i = 0; i < nums1.length; i++){
      
      tempNode = myBST.lookup(nums1[i]);

      while(nums1[i] === nums1[i+ 1]){
          count++;
          i++;
      }
    
      if(tempNode !== null){
        if(tempNode.count === count){
          insertArray(intersection, count,tempNode.value);
          }
          else{
            insertArray(intersection, Math.min(tempNode.count, count),tempNode.value);
          }
      }
      count = 1;

    }

}      
        
        console.log(intersection);
}

function insertArray(intersection, count, value) {
  let i =0;

    while(i < count){
      intersection.push(value);
      i++;
    }
  
}
quickSort(nums1,0,nums1.length - 1);
quickSort(nums2,0,nums2.length - 1);
console.log(nums1);
console.log(nums2);
intersectionArray(nums1,nums2);