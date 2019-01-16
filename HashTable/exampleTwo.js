const twoSum = function(nums, target) {
  if (nums.length < 2) {
    return null;
  }

  let res = new Array(2);

  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      res[0] = mp.get(diff);
      res[1] = i;
      return res;
    } else {
      mp.set(nums[i], i);
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
