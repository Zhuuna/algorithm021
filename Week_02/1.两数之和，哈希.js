// Using ES6 data structure Map. Time complexity is O(n).
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

// Using Object. Time complexity is also O(n).
// 注意 hash[n] !== undefined 判断和  const n = target - nums[i]
// var twoSum = function (nums, target) {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     const n = target - nums[i];
//     if (hash[n] !== undefined) {
//       return [hash[n], i];
//     }
//     hash[nums[i]] = i;
//   }
//   return [];
// };
