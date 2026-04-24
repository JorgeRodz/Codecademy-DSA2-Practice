const sumOfElements = require('./sum-of-elements');

describe('sumOfElements', () => {
  test('returns the sum of a typical array', () => {
    expect(sumOfElements([1, 2, 3, 4, 5])).toBe(15);
  });

  test('returns 0 for an empty array', () => {
    expect(sumOfElements([])).toBe(0);
  });

  test('returns the element itself for a single-element array', () => {
    expect(sumOfElements([7])).toBe(7);
  });

  test('handles negative numbers', () => {
    expect(sumOfElements([-1, -2, -3])).toBe(-6);
  });

  test('handles a mix of positive and negative numbers', () => {
    expect(sumOfElements([-5, 10, -3, 8])).toBe(10);
  });

  test('returns 0 when positives and negatives cancel out', () => {
    expect(sumOfElements([-5, 5, -3, 3])).toBe(0);
  });

  test('handles an array containing zero', () => {
    expect(sumOfElements([0, 0, 0])).toBe(0);
  });

  test('handles large numbers', () => {
    expect(sumOfElements([1000000, 2000000, 3000000])).toBe(6000000);
  });
});
