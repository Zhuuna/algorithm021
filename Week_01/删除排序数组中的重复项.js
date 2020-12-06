/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let moveIndex = 0;

  nums.forEach((value, index) => {
    if (value !== nums[moveIndex]) {
      nums[++moveIndex] = value;
    }
  });

  return moveIndex + 1;
};
