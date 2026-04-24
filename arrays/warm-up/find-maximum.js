/**
 * Return the largest number in an array.
 * @param {number[]} nums
 * @returns {number}
 */
function findMaximum(nums) {

  let maxNumber = nums[0];

  for (let i=1; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i]
    }
  }

  return maxNumber;
}

module.exports = findMaximum;
