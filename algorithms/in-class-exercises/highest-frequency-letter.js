/**
 * Given a string s, return the letter with the highest frequency.
 *
 * Example:
 *   highestFrequencyLetter("aababc")  →  "a"  (a:3, b:2, c:1)
 *   highestFrequencyLetter("hello")   →  "l"  (h:1, e:1, l:2, o:1)
 *
 * If multiple letters share the highest frequency, return the one that
 * appears first in the string.
 *
 * @param {string} s - a non-empty string of lowercase letters
 * @returns {string} - the letter with the highest frequency
 */
function highestFrequencyLetter(s) {

  let freq = {} // To save the letter and his frequency
  let maxCount = 1; // Start with 1; Only if a letter repeats more than 1 time we will update this variable. This works if no letter is repeated more than once
  let maxLetter = s[0]; // We always initialize this variable with the first letter; Just in case no letter is repeated we ensure the first letter is return

  // Big O notation
  // Time complexity = O(n) -> We have to loop the string
  // Space complexity = O(n) -> Same, If a new letter is found we have to add it to the freq object
  for (let letter of s) {
    if (freq[letter] === undefined) {
      freq[letter] = 1
    } else {
      freq[letter]++

      if (freq[letter] > maxCount) {
        maxCount = freq[letter]
        maxLetter = letter
      }
    }
  }

  return maxLetter
}


module.exports = highestFrequencyLetter;
