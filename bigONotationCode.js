// Constant runtime - Big O Notation:  "O (1)"
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

//^^^ The run time stays constant no matter how many items/elements there are. ^^^

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Linear runtime - Big O Notation:  "O (n)"
function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//You will have to do an operation on every element in this array.
//This can start to add up the more elements that are added.

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

// Exponential runtime - Big O Notation: "O (n^2)"
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}
//^^^ Stay away from functions that do this. ^^^
//This is very time consuming the more elements that are added.

addAndLog(["A", "B", "C"]); // 9 pairs logged out
addAndLog(["A", "B", "C", "D"]); // 16 pairs logged out
addAndLog(["A", "B", "C", "D", "E"]); // 25 pairs logged out

// Logarithmic runtime - Big O Notation: O (log n)
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// ^^^ This is the most performant algorithm to use. ^^^
