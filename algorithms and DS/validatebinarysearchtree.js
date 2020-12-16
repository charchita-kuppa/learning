class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  
  validateBinarySearchTree(node) {
    let queue = [];
    let currentNode = null;
    let setFlag;
    queue.push(node);
    while(queue.length !== 0) {
      currentNode = queue.shift();
      if(currentNode.left !== null && currentNode.right !== null) {
        if(currentNode.value > currentNode.left.value && currentNode.value < currentNode.right.value) {
          queue.push(currentNode.left);
          queue.push(currentNode.right);
          setFlag = true;
        } else {
          return false;
        }
      }
      else if (currentNode.left !== null && currentNode.right === null) {
        if(currentNode.value > currentNode.left.value){
          queue.push(currentNode.left);
          setFlag = true;
        } else {
          return false;
        }
      }
      else{
        if(currentNode.right){
          if(currentNode.value < currentNode.right.value) {
            queue.push(currentNode.right);
            setFlag = true;
          } else {
            return false;
          }
        }
      }
  }
  return setFlag;
  }

    

}

let myTree = new BinarySearchTree();

/*    9
    /   \
   4      20
  /  \    / \
 1   6   15  50
             / \
           33    60
           /\    
          32 34
    */

let newNode = new Node(9);
myTree.root = newNode;

newNode = new Node(4);
myTree.root.left = newNode;

newNode = new Node(20);
myTree.root.right = newNode;

newNode = new Node(6);
myTree.root.left.left = newNode;

newNode = new Node(1);
myTree.root.left.right = newNode;

newNode = new Node(15);
myTree.root.right.left = newNode;

newNode = new Node(50);
myTree.root.right.right = newNode;

newNode = new Node(60);
myTree.root.right.right.right = newNode;

newNode = new Node(33);
myTree.root.right.right.left = newNode;

newNode = new Node(32);
myTree.root.right.right.left.left = newNode;

newNode = new Node(34);
myTree.root.right.right.left.right = newNode;

myTree.validateBinarySearchTree(myTree.root);
