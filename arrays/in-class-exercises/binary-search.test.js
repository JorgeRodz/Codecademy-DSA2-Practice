const binarySearch = require('./binary-search');

describe('binarySearch', () => {
  test('returns true when target exists in the middle', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(true);
  });

  test('returns true when target is the first element', () => {
    expect(binarySearch([2, 4, 6, 8, 10], 2)).toBe(true);
  });

  test('returns true when target is the last element', () => {
    expect(binarySearch([2, 4, 6, 8, 10], 10)).toBe(true);
  });

  test('returns false when target is not in the array', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(false);
  });

  test('returns false when target is smaller than all elements', () => {
    expect(binarySearch([10, 20, 30], 5)).toBe(false);
  });

  test('returns false when target is larger than all elements', () => {
    expect(binarySearch([10, 20, 30], 99)).toBe(false);
  });

  test('works with a single-element array that matches', () => {
    expect(binarySearch([7], 7)).toBe(true);
  });

  test('works with a single-element array that does not match', () => {
    expect(binarySearch([7], 3)).toBe(false);
  });

  test('works with negative numbers', () => {
    expect(binarySearch([-10, -5, 0, 3, 8], -5)).toBe(true);
  });

  test('returns false on an empty array', () => {
    expect(binarySearch([], 1)).toBe(false);
  });
});
