import Romint from '../src/index';
import { describe, expect, test } from '@jest/globals';

describe('Compare results', () => {
  test('1-3999', () => {
    for (let i = 1; i <= 3999; i++) {
      const roman = Romint.parseRoman(i);
      const num = Romint.parseInt(roman);
      expect(num).toEqual(i);
    }
  });
});
