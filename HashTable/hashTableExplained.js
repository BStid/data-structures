//HashTable
//0(1)

/* 
- Constant time for insertion & lookup
- Data doesn't store references to other pieces of data in the data structre.

Practical Uses:
    - Can use HashTables to store just about any type of information.
    - Email provider storing addresses
    - Users of an application
*/

function HashTable(size) {
  //defines where the data will be stored
  //"Make a new array of whatever size and assign it to this.buckets"
  this.buckets = Array(size);
  //number of buckets in the array;
  this.numOfBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  //start with a total of 0
  let total = 0;
  //for each letter in the string, take the Character Code Number and add it to the total
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  //the total is most likely greater than the bucket size
  //you will need to take the remainder
  const bucket = total % this.numOfBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  //hash the key to determine the index of the bucket
  let index = this.hash(key);
  //if the index of the bucket is empty, create a new hashNode
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  //else if, the buckets' index does exists and has the same key as the key we pass in...
  //change the value to the new value that is passed in
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  //otherwise, if the bucket has a node, travel to the end of the chain and create a new HashNode
  else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      //if the key on the next Node is equal to the key we pass in...
      if (currentNode.next.key === key) {
        //set the next Node's value to the value we pass in
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  //hash the key into an index to find the correct bucket
  let index = this.hash(key);
  //if nothing in the bucket... return null
  if (!this.buckets[index]) return null;
  //otherwise, travel through all the nodes in that bucket with the while loop.
  else {
    let currentNode = this.buckets[index];
    while (currentNode) {
      //if the key parameter matches any of the keys in the currentNode, return the value of that currentNode
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function() {
  //define empty array to store all nodes
  let allNodes = [];
  //loop through the entire bucket
  for (let i = 0; i < this.numOfBuckets; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};
const myHT = new HashTable(30);

// console.log(myHT.hash('Benjamin'));
myHT.insert("Ben", "ben@benstidham.com");
myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "dane@yahoo.com");
myHT.insert("Dean", "deanmachine@gmail.com");
myHT.insert("Megan", "megansmith@gmail.com");
myHT.insert("Dane", "daneboy@gmail.com");
myHT.insert("Joe", "joey@google.com");
myHT.insert("Samantha", "sameow@zoo.com");

console.log(myHT.retrieveAll());
