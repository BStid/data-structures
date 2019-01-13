// Queue
// O(n)

class Queue {
  //Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  //adds the element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  //removes element from the beginning of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  //Returns the first element in the queue
  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  //List out each element in the queue
  //This method the elements are concatenated and returned in the form of a string
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
