/**
 * Remove the element at the given index and return it.
 * The remaining elements should shift left to fill the gap.
 * Do not use built-in methods like splice, slice, or filter.
 * @param {any[]} arr
 * @param {number} index
 * @returns {any} the removed element
 */
function removeAt(arr, index) {
  let removedElement = arr[index]

  // Shift elements to the left to fill the gap
  for (let i = index; i < (arr.length - 1); i++) {
    arr[i] = arr[i + 1]
  }

  // Remove the last element (now a duplicate after shifting)
  arr.length = arr.length - 1

  return removedElement
}

module.exports = removeAt;
