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

  push(value) {
    let new_Node = new Node(value);
    new_Node.prev = this.top;
    this.top = new_Node;

  }

  displayStack() {
    this.temp = this.top;
    while (this.temp !== null) {
      console.log(this.temp.value);
      this.temp = this.temp.prev;
    }
  }

  Top () {
    return this.top.value;
  }

  pop() {
    if (this.isEmptyStack()) {
      console.log('the stack is empty');
    }
    else {
      var temp = this.top;
      this.top = this.top.prev;
      temp.prev = null;
    }
  }
}

class queue {
  constructor() {
  this.myStack1 = new Stack();
  this.myStack2 = new Stack();
  }
  enqueue(value) {

    while( !this.myStack1.isEmptyStack()) {
      this.myStack2.push(this.myStack1.Top());
      this.myStack1.pop();

    }
    this.myStack1.push(value);
    //console.log(this.myStack2);
    while(!this.myStack2.isEmptyStack()) {
      this.myStack1.push(this.myStack2.Top());
      this.myStack2.pop();

    }
    //console.log(this.myStack1);
  }
  displayQueue() {
    this.myStack1.displayStack();
  }

  dequeue() {
    var data = this.myStack1.Top();
    this.myStack1.pop();
    return data;
  }
}

let myQueue = new queue();
myQueue.enqueue('google');
myQueue.enqueue('amazon');
myQueue.enqueue('youtube');
myQueue.enqueue('discord');
myQueue.displayQueue();
console.log(myQueue.dequeue());