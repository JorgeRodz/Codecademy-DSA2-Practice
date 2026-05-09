const mergeSortedArrays = require('./merge-sorted-arrays');

describe('mergeSortedArrays', () => {
  test('merges two sorted arrays of equal length', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('merges when first array is shorter', () => {
    expect(mergeSortedArrays([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('merges when second array is shorter', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('merges when first array is empty', () => {
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('merges when second array is empty', () => {
    expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test('merges two empty arrays', () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  test('handles duplicate values across arrays', () => {
    expect(mergeSortedArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4]);
  });

  test('handles duplicate values within the same array', () => {
    expect(mergeSortedArrays([1, 1, 3], [2, 2, 4])).toEqual([1, 1, 2, 2, 3, 4]);
  });

  test('returns a new array and does not mutate the inputs', () => {
    const arr1 = [1, 3];
    const arr2 = [2, 4];
    const result = mergeSortedArrays(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(arr1).toEqual([1, 3]);
    expect(arr2).toEqual([2, 4]);
  });

  test('merges single-element arrays', () => {
    expect(mergeSortedArrays([1], [2])).toEqual([1, 2]);
    expect(mergeSortedArrays([2], [1])).toEqual([1, 2]);
  });
});
