/**
 * Add one or more elements to the beginning of an array, in the order they
 * are provided, and return the new length of the array.
 *
 * Example:
 *   arrayUnshift([4, 5], 1, 2, 3)  →  arr becomes [1, 2, 3, 4, 5], returns 5
 *   arrayUnshift([2, 3], 1)        →  arr becomes [1, 2, 3],         returns 3
 *
 * Do not use the built-in Array.prototype.unshift method.
 *
 * @param {any[]} arr       - the array to prepend elements to (mutated in place)
 * @param {...any} elements - one or more elements to add at the front
 * @returns {number}        - the new length of the array
 */
function arrayUnshift(arr, ...elements) {
  // Shift existing elements to the right to make space for new elements
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + elements.length] = arr[i];
  }

  // Insert new elements at the beginning
  for (let i = 0; i < elements.length; i++) {
    arr[i] = elements[i];
  }

  return arr.length;
}

module.exports = arrayUnshift;
