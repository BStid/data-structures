class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

function genteratePrintBinary(n) {
  //create new Queue
  let queue = new Queue();

  //add first binary number
  queue.enqueue("1");

  while (n-- > 0) {
    let s1 = queue.front();
    queue.dequeue();
    console.log(s1);

    let s2 = s1;
    queue.enqueue(s1 + "0");

    queue.enqueue(s2 + "1");
  }
}

genteratePrintBinary(5);
