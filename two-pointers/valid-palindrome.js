/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clean = cleanUp(s);
  const stack = [];
  for (let i = clean.length - 1; i > -1; i--) {
    stack.push(clean[i]);
  }
  return clean === stack.join("");
};

const cleanUp = (s) => {
  const char = "abcdefghijklmnopqrstuvwxyz0123456789";
  let clean = "";
  for (let i = 0; i < s.length; i++) {
    const lower = s[i].toLowerCase();
    if (char.indexOf(lower) !== -1) {
      clean += lower;
    }
  }
  return clean;
};
