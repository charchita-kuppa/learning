const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//to insert each number in the new node
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev =null;
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.node = null;
  }
}
// head node
let dll = new DoubleLinkedList();
dll.head = new Node(numbers[0]);
dll.node = dll.head;
  

function insertionSort(array) {

for(let i = 1; i < array.length; i++) {
//loop through the doubly linked list until the node.data is greater than number array[i] and until it doesnot reach head node.
while(dll.node.data > array[i] && dll.node !== dll.head) {
  dll.node = dll.node.prev;
}
// if the number is less than node.data append at head node
if(dll.node.data > array[i]){
  appendAtHead(array[i]);
}
//if it greater than the headnode.data insert it after the head node.
else{
  insertBtw(array[i]);
}
//loop through the doubly linked list until the node.data is smaller than number array[i] and until it doesnot reach tail node.

while(dll.node.data < array[i] && dll.node.next !== null) {
  dll.node = dll.node.next;
}

//if the number is greater than node.data append at the tail node.

if(dll.node.data < array[i]){
  insertAtTail(array[i]);
}
//if the number is less than tail node insert it before tail node.
else{
  insertBtw(array[i]);
}

}
// To store the sorted array.
let temp = dll.head;
let i = 0;
while(temp !== null){
  array[i] = temp.data;
  temp = temp.next;
  i++;
}
  //console.log(newArray);
}
// to append before head node
function appendAtHead(item) {
let newNode = new Node(item);
dll.head.prev = newNode;
newNode.next = dll.head;
dll.head = newNode;

while(dll.node.next !== null){
  dll.node = dll.node.next;
}

}
//to insert after tail node
function insertAtTail(item){
  let newNode = new Node(item);
  dll.node.next = newNode;
  newNode.prev = dll.node;
  dll.node = newNode;

}
// to insert between the nodes
function insertBtw(item) {
  let newNode = new Node(item);
  if(dll.node.next) {
  let temp = dll.node.next;
  dll.node.next = newNode;
  newNode.prev =dll.node;
  temp.prev = newNode;
  newNode.next = temp;
  }

  while(dll.node.next !== null){
  dll.node = dll.node.next;
}

}

insertionSort(numbers);
console.log(numbers);