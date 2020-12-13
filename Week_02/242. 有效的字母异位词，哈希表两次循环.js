/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 解题
 * 1. 数组排序：暴力 sort, sorted_str 相等 O(NLogN)
 * 2. hash,map --> 统计每个字符的频次
 * 3. 数组计数
 *
 * 解题步骤
 * 1. clarification
 * 2. possible solutions --> optiaml(time&space)
 * 3. code
 * 4. test code
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * 方法二：hash
 * codePointAt()方法返回一个Unicode编码值的非负整数
 */

var isAnagram = function (s, t) {
  if (s.length() != t.length()) return false;
  const map = {};
  s.split("").map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
  t.split("").map((c) => (map[c] = map[c] ? map[c] - 1 : -1));
  return Object.keys(map).every((k) => map[k] === 0);
};

/**
 * 官方
 *
 * 解题思路：
 * 首先判断两个字符串长度是否相等，不相等则直接返回 false 若相等，则初始化 26 个字母哈希表，遍历字符串 s 和 t,s 负责在对应位置增加，t 负责在对应位置减少,如果哈希表的值都为 0，则二者是字母异位词。
 * Unicode 是为了解决传统字符编码的局限性而产生的方案，它为每个语言中的字符规定了一个唯一的二进制编码
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end
