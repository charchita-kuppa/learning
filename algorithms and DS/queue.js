
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return (this.front === null) ? true : false;
  }

  peek() {
    if(this.isEmpty())
    console.log('the queue is empty');
    else
    console.log('the first value in queue is ' + this.front.value);
  }

  enqueue(value) {
    let new_node = new Node(value);
    if(this.isEmpty())
    this.rear = this.front = new_node;
    else {
      this.rear.next = new_node;
      this.rear = new_node;
    }
  }
  displayQueue() {
    this.temp = this.front;
    console.log('the items in queue');
    while(this.temp !== null) {
      console.log(this.temp.value);
      this.temp = this.temp.next;

    }

  }

    dequeue() {
      if (this.isEmpty()) {
      console.log('the queue is empty');
    }
      
        var data = this.front.value;
        var temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        return data;
        
    
    }
}
    
let myQueue = new Queue();
myQueue.enqueue('google');
myQueue.enqueue('amazon');
myQueue.enqueue('youtube');
myQueue.enqueue('discord');
myQueue.displayQueue();
//myQueue.peek();
console.log(myQueue.dequeue());
