const { twoSum } = require('./two-sum');

describe('twoSum', () => {
  test('basic case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('answer not at index 0', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('duplicate values', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
