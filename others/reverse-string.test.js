const reverseString = require('./reverse-string');

describe('reverseString', () => {
  test('reverses a simple word', () => {
    expect(reverseString('cat')).toBe('tac');
  });

  test('reverses a longer word', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('returns a single character unchanged', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('returns an empty string unchanged', () => {
    expect(reverseString('')).toBe('');
  });

  test('reverses a palindrome correctly', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});
