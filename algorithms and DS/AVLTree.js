//to create a new node
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.height = 1;
    this.value = value;
    
  }
}
//AVL tree
class AvlTree {
  constructor() {
    this.root = null;
    
  }

// insert the nodes in tree
insert(value) {  
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
      this.root = this.insertNodeAndUpdateHeight(value,this.root);
      //console.log(this.root);
      
  }

  insertNodeAndUpdateHeight(value,node) {
    if(node === null) 
    return;
    // value < node.value go left of tree
    if(value < node.value) {
      if(node.left !== null) {
        this.insertNodeAndUpdateHeight(value,node.left);
      } else {
        node.left = new Node(value);
      } 
    } 
    //value > node.value go right of tree
    if(value > node.value)  {
      if(node.right !== null) {
        this.insertNodeAndUpdateHeight(value,node.right);
      } else {
        node.right = new Node(value);
      } 
    } 

      node.height = this.getMaxHeightFromSubtree(node) + 1;

      let balanceFactor = this.getDiffBetweenSubtree(node);

      //Left Left case
      if( balanceFactor > 1 && value < node.left.value ) {
          node = this.rotateRight(node);
      } 
      //Right Right case
      if ( balanceFactor < -1 && value > node.right.value ) {
          node = this.rotateLeft(node);
      }
      // Left Right case
      if ( balanceFactor > 1 && value > node.left.value ) {
          node.left = this.rotateLeft(node.left);
          node = this.rotateRight(node);
          
      }
      // Right Left case
      if ( balanceFactor < -1 && value < node.right.value ) {
          node.right = this.rotateRight(node.right);
          node = this.rotateLeft(node);
      }

      return node;
  }
 
  getMaxHeightFromSubtree(node) {
    if(node.left === null && node.right === null) {
      return 0;
    }
    if(node.left === null) {
      return node.right.height;
    }
    if(node.right === null) {
      return node.left.height;
    }
    return Math.max(node.left.height, node.right.height);
  }

  getDiffBetweenSubtree(node) {
    if(node === null) {
      return 0;
    }
    return this.height(node.left) - this.height(node.right);
  }

  height(node) {
    if(node === null) {
      return 0;
    }
    return node.height;
  }

  rotateLeft(node) {
    let tempNode = node;
    let tempNode1 = node;
    tempNode1 = tempNode1.right;
    tempNode.right = tempNode1.left;
    tempNode1.left = tempNode;

    tempNode1.left.height = this.getMaxHeightFromSubtree(tempNode1.left) + 1;
    tempNode1.height = this.getMaxHeightFromSubtree(tempNode1) + 1;

    return tempNode1;
   
  }

  rotateRight(node){
    let tempNode = node;
    let tempNode1 = node;
    tempNode1 = tempNode1.left;
    tempNode.left = tempNode1.right;
    tempNode1.right = tempNode;

    tempNode1.right.height = this.getMaxHeightFromSubtree(tempNode1.right) + 1;
    tempNode1.height = this.getMaxHeightFromSubtree(tempNode1) + 1;

    return tempNode1;

  }


}

let myTree = new AvlTree();

 
myTree.root = new Node(7);
myTree.root.height = 3;


myTree.root.left = new Node(4);
myTree.root.left.height =2;


myTree.root.right = new Node(10);
myTree.root.right.height = 1;


myTree.root.left.left = new Node(2);
myTree.root.left.left.height = 1;


myTree.root.left.right = new Node(5);
myTree.root.left.right.height =1;

myTree.insert(6);

JSON.stringify(traverse(myTree.root));

//console.log(myTree.lookup(14));
//myTree.remove(33);
//JSON.stringify(traverse(myTree.root));

// recursive traversal
function traverse(node){
  const tree = {value : node.value,
                height : node.height};
  tree.left = (node.left === null)? null : traverse(node.left);
  tree.right = (node.right === null)?null : traverse(node.right);
  return tree;
}