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

  lookup(value) {
    if(this.root === null)
    return null;
    else {
      let currentNode = this.root;
      if(value === currentNode.value) {
        return currentNode;
      }
      else {
      while(currentNode !== null &&currentNode.value !== value) {
        if(value < currentNode.value) {
          currentNode = currentNode.left;
        }
        else {
          currentNode = currentNode.right;
        }

      }
      }
      if(currentNode) {
        return currentNode;
      }
      else {
        return null;
      }
      
    }

  }
  findParentNode(node,currentNode) {
          let parentNode = node;
          while (parentNode.left !== null && parentNode.right !== null) {
          if (currentNode.value < parentNode.value) {
            parentNode = parentNode.left;
            if(parentNode.left === currentNode){ 
              parentNode.left = null;
            }
            else if (parentNode.right === currentNode) {
              parentNode.right = null;
            }
            else{
            //do nothing
            }
                     
          }
          else if (currentNode.value > parentNode.value) {
            parentNode = parentNode.right;
            if(parentNode.left === currentNode){ 
              parentNode.left = null;
            }
            else if (parentNode.right === currentNode) {
              parentNode.right = null;
            }
            else{
            //do nothing
            }

          }
          else {
            //do nothing
          }
  }
  }

  remove(value) {
    let currentNode = this.lookup(value);
    if(!currentNode) {
      console.log('there is no such node');
    }
    else{
    let smallestNode = currentNode.right;
    if(!smallestNode) {
        smallestNode = currentNode.left;
        if(smallestNode) {
        currentNode.value = smallestNode.value;
        currentNode.left = smallestNode.left;
        cuurentNode.right = smallestNode.right;
        }
        else {
          this.findParentNode(this.root,currentNode);
        }
    }
    else {
    while(smallestNode.left !== null && smallestNode.left.left !== null) {
      smallestNode = smallestNode.left;
    }
    if(smallestNode.left !== null) {
      var temp2 = smallestNode.left;
      if(!temp2.right) {
      smallestNode.left = null; 
      }
      else {
        smallestNode.left = temp2.right;
        temp2.right = null;
      }
      currentNode.value = temp2.value;
      
    }
    else {
      currentNode.value = smallestNode.value;
      currentNode.right = smallestNode.right;
      if(smallestNode.right)
      smallestNode.right = null;
    }
  } 
  } 
  //return this.root;
  }

breadthFirstSearch() {
  let currentNode = this.root;
  let list = [];
  let queue = [];
  queue.push(this.root);
  while(queue.length !== 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    
  }
  return list;
}
breadthFirstSearchRecursive(queue,list) {
  if(queue.length === 0){
    return list;
  }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    
  
  this.breadthFirstSearchRecursive(queue,list);
  return list;
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
//myTree.breadthFirstSearch();
myTree.breadthFirstSearchRecursive([myTree.root],[]);
//JSON.stringify(traverse(myTree.root));

//console.log(myTree.lookup(14));
//myTree.remove(33);
//JSON.stringify(traverse(myTree.root));

// recursive traversal
function traverse(node){
  const tree = {value : node.value};
  tree.left = (node.left === null)? null : traverse(node.left);
  tree.right = (node.right === null)?null : traverse(node.right);
  return tree;
}

//iterative traversal
