/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {};

  map[")"] = "(";
  map["}"] = "{";
  map["]"] = "[";

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (map[s[i]] !== stack.pop()) {
        return false;
      }
    }
  }
  return true;
};
