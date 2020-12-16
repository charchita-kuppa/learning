class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmptyStack() {
    return (this.top === null) ? true : false;
  }

  peek() {
    if (this.isEmptyStack()) {
      console.log('the stack is empty');
    }
    else {
      console.log('the top of stack has ' + this.top.value);
    }
  }

  push(value) {
    let new_Node = new Node(value);
    new_Node.prev = this.top;
    this.top = new_Node;

  }
  pop() {
    if (this.isEmptyStack()) {
      console.log('the stack is empty');
    }
    else {
      var temp = this.top;
      var data = this.top.value;
      this.top = this.top.prev;
      temp.prev = null;
      return data;
    }
  }
}


let myStack = new Stack();
myStack.push('google');
myStack.push('amazon');
myStack.push('youtube');
myStack.push('discord');
myStack.peek();
console.log(myStack.pop());
