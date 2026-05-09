/**
 * Merge two sorted arrays of numbers into a single sorted array.
 *
 * Both input arrays are already sorted in ascending order. The returned array
 * must also be sorted in ascending order and contain all elements from both
 * input arrays.
 *
 * Example:
 *   mergeSortedArrays([1, 3, 5], [2, 4, 6])  →  [1, 2, 3, 4, 5, 6]
 *   mergeSortedArrays([1, 2], [3, 4, 5])     →  [1, 2, 3, 4, 5]
 *   mergeSortedArrays([], [1, 2])             →  [1, 2]
 *
 * @param {number[]} arr1 - a sorted array of numbers
 * @param {number[]} arr2 - a sorted array of numbers
 * @returns {number[]}    - a new sorted array containing all elements from both arrays
 */
function mergeSortedArrays(arr1, arr2) {
  let mergeArr = [] // O(1)
  let maxLen = arr1.length + arr2.length; // O(1)

  let arry1Pointer = 0 // O(1)
  let arry2Pointer = 0 // O(1)

  // O(n)
  for (let i = 0; i < maxLen; i++) {
    if (arr1[arry1Pointer] === undefined) {
      mergeArr.push(arr2[arry2Pointer])
      arry2Pointer++
      continue
    }

    if (arr2[arry2Pointer] === undefined) {
      mergeArr.push(arr1[arry1Pointer])
      arry1Pointer++
      continue
    }

    if (arr1[arry1Pointer] < arr2[arry2Pointer]) {
      mergeArr.push(arr1[arry1Pointer])
      arry1Pointer++;
    } else {
      mergeArr.push(arr2[arry2Pointer])
      arry2Pointer++;
    }
  }

  return mergeArr; // O(1)
}

// Big O notation time complexity -> O(4 + n) -> O(n) -> Add the end we have to loop the total sum of both arrays
// Big O notation space complexity -> O(n) -> We have to add every element in a new array


module.exports = mergeSortedArrays;
