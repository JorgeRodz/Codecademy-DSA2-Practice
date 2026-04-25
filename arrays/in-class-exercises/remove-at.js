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

  for (let i = index; i < (arr.length - 1); i++) {
    arr[i] = arr[i + 1]
  }

  arr.length = arr.length - 1

  return removedElement
}

module.exports = removeAt;
