// Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

// We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.

// The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.

class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(item) {
    this.collection.push(item);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length == 0;
  }
}
