/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let diff = target - current;
    if (map[diff] !== undefined && map[diff] !== i) {
      return [map[diff], i];
    } else {
      map[current] = i;
    }
  }
  return [-1];
};
