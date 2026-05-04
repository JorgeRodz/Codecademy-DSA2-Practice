const highestFrequencyLetter = require('./highest-frequency-letter');

describe('highestFrequencyLetter', () => {
  test('returns the letter with the highest frequency', () => {
    expect(highestFrequencyLetter('aababc')).toBe('a');
  });

  test('works when the most frequent letter is in the middle', () => {
    expect(highestFrequencyLetter('hello')).toBe('l');
  });

  test('returns the only letter in a single-character string', () => {
    expect(highestFrequencyLetter('z')).toBe('z');
  });

  test('returns the correct letter when all letters appear once except one', () => {
    expect(highestFrequencyLetter('abcda')).toBe('a');
  });

  test('returns the first-occurring letter when there is a tie', () => {
    expect(highestFrequencyLetter('abab')).toBe('a');
  });

  test('works with a string of repeated identical letters', () => {
    expect(highestFrequencyLetter('ssss')).toBe('s');
  });

  test('works with a longer string', () => {
    expect(highestFrequencyLetter('mississippi')).toBe('s');
  });
});
