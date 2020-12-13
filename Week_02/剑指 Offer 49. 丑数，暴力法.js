/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n == 1) {
    return 1;
  }
  let a = 0,
    b = 0,
    c = 0;
  let temp = [1];
  for (let i = 1; i < n; i++) {
    temp[i] = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5);
    temp[i] >= temp[a] * 2 ? a++ : 0;
    temp[i] >= temp[b] * 3 ? b++ : 0;
    temp[i] >= temp[c] * 5 ? c++ : 0;
  }
  return temp[temp.length - 1];
};
