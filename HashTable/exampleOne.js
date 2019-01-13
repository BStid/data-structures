/*

Find Whether an Array is a Subset of Another Array

Input: 
    array1 = [11,1,13,21,3,7];
    array2 = [11,3,7,1];

Output: true;

Input: 
    array1 = [10,5,2,23,19];
    array2 = [19,5,3];

Output: false
*/

const array1 = [11, 1, 13, 21, 3, 7];
const array2 = [11, 3, 7, 1];

function isSubset(arr1, arr2) {
  //declare a new Hash Set with the values of array 1 passed in
  const set1 = new Set(arr1);

  //loop through each element in array2
  //if one of the elements is not contained in set1, return false;
  for (let i = 0; i < arr2.length; i++) {
    if (!set1.has(arr2[i])) return false;
  }
  return true;
}

console.log(isSubset(array1, array2));
