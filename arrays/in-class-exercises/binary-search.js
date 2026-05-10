/**
 * Given a sorted array of numbers, return true if the target exists, false otherwise.
 * @param {number[]} nums - sorted array of numbers
 * @param {number} target
 * @returns {boolean}
 */
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2)

    if (nums[middleIndex] === target) {
      return true
    }

    if (target > nums[middleIndex]) {
      left = middleIndex + 1;
    }

    if (target < nums[middleIndex]) {
      right = middleIndex - 1;
    }
  }

  return false
}

module.exports = binarySearch;
