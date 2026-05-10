/**
 * Given a string, return it reversed.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  let strLen = str.length - 1;
  let newString = ''

  for (let i = strLen; i >= 0; i--) {
    newString += str[i]
  }

  return newString
}

module.exports = reverseString;
