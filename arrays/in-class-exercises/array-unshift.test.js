const arrayUnshift = require('./array-unshift');

describe('arrayUnshift', () => {
  test('adds a single element to the beginning of the array', () => {
    const arr = [2, 3, 4];
    arrayUnshift(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('returns the new length after adding one element', () => {
    const arr = [2, 3, 4];
    expect(arrayUnshift(arr, 1)).toBe(4);
  });

  test('adds multiple elements to the beginning in order', () => {
    const arr = [4, 5];
    arrayUnshift(arr, 1, 2, 3);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns the new length after adding multiple elements', () => {
    const arr = [4, 5];
    expect(arrayUnshift(arr, 1, 2, 3)).toBe(5);
  });

  test('works on an empty array', () => {
    const arr = [];
    arrayUnshift(arr, 42);
    expect(arr).toEqual([42]);
  });

  test('returns 1 when adding one element to an empty array', () => {
    const arr = [];
    expect(arrayUnshift(arr, 42)).toBe(1);
  });

  test('works with string elements', () => {
    const arr = ['c', 'd'];
    arrayUnshift(arr, 'a', 'b');
    expect(arr).toEqual(['a', 'b', 'c', 'd']);
  });

  test('does not use the built-in unshift method', () => {
    const arr = [2, 3];
    const originalUnshift = Array.prototype.unshift;
    Array.prototype.unshift = () => { throw new Error('unshift is not allowed'); };
    expect(() => arrayUnshift(arr, 1)).not.toThrow();
    Array.prototype.unshift = originalUnshift;
  });
});
