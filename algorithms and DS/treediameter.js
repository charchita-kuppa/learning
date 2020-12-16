 class Node {
  constructor(value){
  this.left = null;
  this.right = null;
  this.value = value;
  this.height= 1;
  } 
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  calculateTreeDiameter(node) {
    
    let leftSubTreeDiameter = 0;
    let rightSubTreeDiameter = 0;
   
    if (node === null) {
      return 0;
    }
    //console.log(node);
    if (node.left !== null){
      this.calculateSubTreeHeight(node.left);
      leftSubTreeDiameter = this.getDiameter(node.left);

    }
    if(node.right !== null) {
      this.calculateSubTreeHeight(node.right);
      rightSubTreeDiameter = this.getDiameter(node.right);
    }
      
    
    node.height = this.getMax(node) + 1;
    
    console.log( 'the diameter of the tree is ' + Math.max( node.height, leftSubTreeDiameter, rightSubTreeDiameter ) );

  }

  calculateSubTreeHeight(node) {
   //console.log(node);
  
    if(node.left !== null) {
      this.calculateSubTreeHeight(node.left);
    }
    if(node.right !== null) {
      this.calculateSubTreeHeight(node.right);
    }
    //console.log(node);
    node.height = this.getMax(node) + 1;  
    
  }

  getDiameter(node) {
    if(node.left !== null && node.right !== null) {
      return node.left.height + node.right.height ;
    }

    else if(node.right === null && node.left !== null) {
      return node.left.height;
    }

    else if(node.left === null && node.right !== null) {
      return node.right.height;
    }    

    else {
      return 0;
    }
  }

  getMax(node) {
    if(node.left !== null && node.right !== null) {
      return Math.max(node.left.height,node.right.height);
    }

    else if(node.right === null && node.left !== null) {
      return node.left.height;
    }

    else if(node.left === null && node.right !== null) {
      return node.right.height;
    }    

    else {
      return 0;
    }
    
  }

  
}

let myBST = new BinarySearchTree();

 
myBST.root = new Node(9);
myBST.root.left = new Node(4);
myBST.root.right = new Node(20);
myBST.root.left.left = new Node(1);
myBST.root.left.right = new Node(6);
myBST.root.right.left = new Node(15);
myBST.root.right.right = new Node(50);
myBST.root.right.right.right = new Node(60);
myBST.root.right.right.left = new Node(33);
myBST.root.right.right.left.left = new Node(32);
myBST.root.right.right.left.right = new Node(34);
JSON.stringify(traverse(myBST.root));
myBST.calculateTreeDiameter(myBST.root);



// recursive traversal
function traverse(node){
  const tree = {value : node.value,
                height : node.height};
  tree.left = (node.left === null)? null : traverse(node.left);
  tree.right = (node.right === null)?null : traverse(node.right);
  return tree;
}