const removeAt = require('./remove-at');

describe('removeAt', () => {
  test('removes the element at the given index', () => {
    const arr = [1, 2, 3, 4];
    removeAt(arr, 1);
    expect(arr).toEqual([1, 3, 4]);
  });

  test('returns the removed element', () => {
    const arr = [1, 2, 3, 4];
    expect(removeAt(arr, 1)).toBe(2);
  });

  test('removes the first element', () => {
    const arr = [10, 20, 30];
    removeAt(arr, 0);
    expect(arr).toEqual([20, 30]);
  });

  test('removes the last element', () => {
    const arr = [10, 20, 30];
    removeAt(arr, 2);
    expect(arr).toEqual([10, 20]);
  });

  test('reduces the array length by one', () => {
    const arr = [1, 2, 3, 4, 5];
    removeAt(arr, 2);
    expect(arr.length).toBe(4);
  });

  test('works on a single-element array', () => {
    const arr = [42];
    removeAt(arr, 0);
    expect(arr).toEqual([]);
  });

  test('works with string elements', () => {
    const arr = ['a', 'b', 'c'];
    removeAt(arr, 1);
    expect(arr).toEqual(['a', 'c']);
  });

  test('does not use splice, slice, or filter', () => {
    const arr = [1, 2, 3];
    const originalSplice = Array.prototype.splice;
    const originalSlice = Array.prototype.slice;
    const originalFilter = Array.prototype.filter;
    Array.prototype.splice = () => { throw new Error('splice is not allowed'); };
    Array.prototype.slice = () => { throw new Error('slice is not allowed'); };
    Array.prototype.filter = () => { throw new Error('filter is not allowed'); };
    expect(() => removeAt(arr, 1)).not.toThrow();
    Array.prototype.splice = originalSplice;
    Array.prototype.slice = originalSlice;
    Array.prototype.filter = originalFilter;
  });
});
