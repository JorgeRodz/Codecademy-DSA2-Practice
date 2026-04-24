const findMaximum = require('./find-maximum');

describe('findMaximum', () => {
  test('returns the largest number in a typical array', () => {
    expect(findMaximum([3, 1, 4, 1, 5, 9, 2, 6])).toBe(9);
  });

  test('works with negative numbers', () => {
    expect(findMaximum([-10, -3, -7, -1, -5])).toBe(-1);
  });

  test('works with a mix of positive and negative numbers', () => {
    expect(findMaximum([-5, 0, 3, -2, 8])).toBe(8);
  });

  test('returns the only element in a single-element array', () => {
    expect(findMaximum([42])).toBe(42);
  });

  test('handles duplicate values and returns the max', () => {
    expect(findMaximum([7, 7, 7])).toBe(7);
  });

  test('works when the max is the first element', () => {
    expect(findMaximum([100, 2, 3, 4])).toBe(100);
  });

  test('works when the max is the last element', () => {
    expect(findMaximum([1, 2, 3, 99])).toBe(99);
  });

  test('handles an array with zero', () => {
    expect(findMaximum([0, -1, -2])).toBe(0);
  });
});
