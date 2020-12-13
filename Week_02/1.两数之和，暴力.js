/**
 * 枚举数组中的每一个数 x，寻找数组中是否存在 target - x。
 * 遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。
 * 而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。
 */
var twoSum = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n - 1; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
