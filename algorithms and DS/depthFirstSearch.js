class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
    }
    else {      
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          //go left in tree
        if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
        }
        currentNode = currentNode.left;
        }
        else if(value > currentNode.value) {
          //go right in tree
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;

          }
          currentNode = currentNode.right;
        }
        else {
          // do nothing
        }
      }
    }

  }

  inOrderDFS(node,list){

    if(node === null) {
      return list;
    }
    if(node.left !== null ){
      this.inOrderDFS(node.left,list);
    }

      list.push(node.value);
    
    if(node.right !== null){
      this.inOrderDFS(node.right,list);
    }

   
    
  }
  preOrderDFS(node,list){
    if(node === null){
      return list;
    }
    
    list.push(node.value);

    if(node.left !== null ){
      this.preOrderDFS(node.left,list);
    }
    
    if(node.right !== null){
      this.preOrderDFS(node.right,list);
    }

  }
  postOrderDFS(node,list){
      if(node === null){
        return list;
      }
      if(node.left !== null && this.doesHaveChildren(node.left)){
        this.postOrderDFS(node.left, list);
      }
    
     
      if(node.left !== null ){
        if( !list.includes(node.left.value)){
            list.push(node.left.value);
        }
      }
        if(node.right !== null && this.doesHaveChildren(node.right)){
        this.postOrderDFS(node.right, list);
      }
         if(node.right !== null ){
         if( !list.includes(node.right.value)){
          list.push(node.right.value);
        }
         }
      list.push(node.value);
      
      

  }
   doesHaveChildren(node){
    if(node.left === null && node.right === null){
      return false;
    }
    else{
      return true;
    }
  }
  
  }

 


let myTree = new binarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.insert(1);
myTree.insert(6);
myTree.insert(15);
myTree.insert(50);
myTree.insert(60);
myTree.insert(33);
myTree.insert(32);
myTree.insert(34);
let list1 =[];
myTree.inOrderDFS(myTree.root,list1);
console.log(list1);

let list2 =[];
myTree.preOrderDFS(myTree.root,list2);
console.log(list2);

let list3 =[];
myTree.postOrderDFS(myTree.root,list3);
console.log(list3);

//JSON.stringify(traverse(myTree.root));

// recursive traversal
function traverse(node){
  const tree = {value : node.value};
  tree.left = (node.left === null)? null : traverse(node.left);
  tree.right = (node.right === null)?null : traverse(node.right);
  return tree;
}

//iterative traversal
