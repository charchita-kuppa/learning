class Node{
  constructor(value){
   
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryHeap{
  constructor(){
     this.root =null;
  }

  insert(value) {
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      
    }
    else{
      this.insertR(value, this.root);
    }
    //return this.root;
  }
  insertR(value,node){
    if(node === null){
      return;
    }
    if(node.left === null){
      node.left = new Node(value);
  
    }
    else { 
    if(node.right === null) {
      node.right = new Node(value);
    }
    else{
    this.insertR(value, node.left);
   
      this.insertR(value, node.right);
    }
    }
  }
  maxifyHeap(node){
    if(node === null){
      return;
     }
     //traverse untill the parent nodes of leaf nodes are reached
     if( node.left!== null && this.doesHaveChildren(node.left)){
       this.maxifyHeap(node.left);
      }
     if( node.right !== null &&     this.doesHaveChildren(node.right)){
       this.maxifyHeap(node.right);
      }
      //check if we reached the parentnode of leafnodes.if the parentNode < max(leaf nodes) swap the parentNode value with max(leafnodes values)
      if(this.doesHaveChildren(node)){
      if( (this.doesHaveChildren(node.left) || this.doesHaveChildren(node.right) === false) && (node.value < this.max(node)) ) {
      if(this.max(node) === node.left.value){
          this.swap(node,node.left);
      }
      else{
          this.swap(node,node.right);
      }
      }
      //if the parentnode is not parent of leafnodes and if parentNode < max(children nodes) swap the parentNode value with max(chidrennodes value) and keep swaping untill leafnode is reached.
      if( (this.doesHaveChildren(node.left) ||this.doesHaveChildren(node.right) === true)  && (node.value > this.max(node)) ){
        
      if(node.left.value < this.max(node.left)){
        if(this.max(node.left) === node.left.left.value){
          this.swap(node.left, node.left.left);
          this.maxifyHeap(node.left.left);
        }
        else {
          this.swap(node.left,node.left.right);
          this.maxifyHeap(node.left.right);
        }
          
      }
        if(node.right.value < this.max(node.right)){
          if(this.max(node.right) === node.right.left.value){
          this.swap(node.right, node.right.left);
          this.maxifyHeap(node.right.left);
        }
        else {
          this.swap(node.right, node.right.right);
          this.maxifyHeap(node.right.right);
        }
      }
      }

      }
      }
  
  doesHaveChildren(node){
    if(node.left === null && node.right === null){
      return false;
    }
    else{
      return true;
    }
  }
  swap(node1,node2) {

    let temp = node1.value;
    node1.value = node2.value;
    node2.value = temp;

  }
  max(node) {
    if(node === null){
      return null;
    }
    if(node.left !== null && node.right !== null){
      
      if(node.left.value > node.right.value){
        return node.left.value;
      }
      else{
        return node.right.value;
      }
    
    }
    else if(node.left !== null && node.right === null){
      return node.left.value; 
    }
    else if(node.right !== null && node.left === null){
      return node.right.value;
    }
  }


}

let myHeap = new BinaryHeap();
let array =[30,10,50,40,60];
for(let i = 0; i < array.length; i++){
  myHeap.insert(array[i]);
}
/*myHeap.insert(30);
myHeap.insert(10);
myHeap.insert(50);
myHeap.insert(40);
myHeap.insert(80);
myHeap.insert(90);
myHeap.insert(70);
myHeap.insert(60);
myHeap.insert(20);
//console.log((myHeap.root));*/


//myHeap.maxifyHeap(myHeap.root);
JSON.stringify(traversal(myHeap.root));

function traversal(node){
  const heap = {value : node.value};
  heap.left = (node.left === null)? null : traversal(node.left);
  heap.right = (node.right === null)?null : traversal(node.right);
  return heap;
}