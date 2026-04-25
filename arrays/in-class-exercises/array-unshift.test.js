const arrayUnshift = require('./array-unshift');

describe('arrayUnshift', () => {
  // --- mutates the array in place ---

  test('prepends multiple elements in the correct order', () => {
    const arr = [4, 5];
    arrayUnshift(arr, 1, 2, 3);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('prepends a single element', () => {
    const arr = [2, 3, 4];
    arrayUnshift(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('prepends multiple elements to an empty array', () => {
    const arr = [];
    arrayUnshift(arr, 'a', 'b', 'c');
    expect(arr).toEqual(['a', 'b', 'c']);
  });

  // --- returns the new length ---

  test('returns the new length after prepending multiple elements', () => {
    const arr = [4, 5];
    expect(arrayUnshift(arr, 1, 2, 3)).toBe(5);
  });

  test('returns the new length after prepending a single element', () => {
    const arr = [2, 3, 4];
    expect(arrayUnshift(arr, 1)).toBe(4);
  });

  test('returns the correct length when starting from an empty array', () => {
    const arr = [];
    expect(arrayUnshift(arr, 10, 20)).toBe(2);
  });

  // --- does not use the built-in unshift ---

  test('does not use Array.prototype.unshift', () => {
    const arr = [3, 4];
    const original = Array.prototype.unshift;
    Array.prototype.unshift = () => { throw new Error('unshift is not allowed'); };
    expect(() => arrayUnshift(arr, 1, 2)).not.toThrow();
    Array.prototype.unshift = original;
  });
});
