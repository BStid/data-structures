const twoSum = function(nums, target) {
  //if the length is less than 2, return null
  if (nums.length < 2) {
    return null;
  }
  //let 'res' equal a new array of size 2
  let res = new Array(2);
  // let 'mp' equal a new Map
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    //if the map has the key value of 'diff'
    if (mp.has(diff)) {
      //set the value of diff to index 0
      res[0] = mp.get(diff);
      //set index 'i' to res[1]
      res[1] = i;
      console.log(i);
      return res;
    } else {
      //if not, set the key to the value of the index of array 'nums' and the value to the index
      mp.set(nums[i], i);
      console.log(mp);
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
