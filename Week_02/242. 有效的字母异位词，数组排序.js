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
 * 方法一：排序
 * js字符串转数组三种方式：
 *  1."abc".split('')
 *  2.[..."abc"]
 *  3.Array.from("abc")
 */

// 官方
var isAnagram = function (s, t) {
  return (
    s.length == t.length && [...s].sort().join("") === [...t].sort().join("")
  );
};
// @lc code=end
