function HashTable(size) {
  //defines where the data will be stored
  //"Make a new array of whatever size and assign it to this.buckets"
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
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
  //the total is most likely greater thank the bucket size
  //you will need to take the remainder
  const bucket = total % this.numBuckets;
  return bucket;
};

let myHT = new HashTable(30);

console.log(myHT.hash("Benjamin"));
