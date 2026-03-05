/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  count = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (!count[current]) {
      count[current] = 1;
    } else {
      count[current]++;
    }
  }

  const countAsArray = Object.entries(count);
  const sorted = countAsArray.sort((a, b) => b[1] - a[1]);

  answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(Number(sorted[i][0]));
  }

  return answer;
};
