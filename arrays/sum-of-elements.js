/**
 * Return the sum of all numbers in an array.
 * @param {number[]} nums
 * @returns {number}
 */
function sumOfElements(nums) {
  let arrLength = nums.length
  let total = 0;

  for (let i = 0; i < arrLength; i++) {
    total += nums[i]
  }

  return total
}


module.exports = sumOfElements;
