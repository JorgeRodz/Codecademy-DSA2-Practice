/**
 * Return the sum of all numbers in an array.
 * @param {number[]} nums
 * @returns {number}
 */
function sumOfElements(nums) {
  let totalSum = 0;

  for (let i=0; i < nums.length; i++) {
    totalSum += nums[i]
  }

  return totalSum
}


module.exports = sumOfElements;
