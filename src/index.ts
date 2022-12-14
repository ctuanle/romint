const basicInR: { [key: number]: string } = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',

  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',

  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',

  1000: 'M',
  2000: 'MM',
  3000: 'MMM',
};

const basicRnI: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Convert an integer into roman numeral
 * @param _num a positive integer less than 4000
 * @returns a roman numeral
 */
export function parseRoman(_num: number): string {
  if (typeof _num !== 'number')
    throw new Error('Invalid input type. Must be a number.');

  if (_num < 1 || _num > 3999)
    throw new Error(
      'Invalid input. Input must be a positive number less than 4000'
    );

  const arr: string[] = [];

  const str: string = String(_num);
  const strlen: number = str.length;

  for (let i = strlen - 1; i >= 0; i--) {
    const numb: number = Number(str[strlen - i - 1]) * 10 ** i;
    arr.push(basicInR[numb]);
  }

  return arr.join('');
}

/**
 * Convert a roman number into an integer
 * @param _roman roman numeral as a string
 * @returns integer number
 */
export function parseInt(_roman: string): number {
  if (typeof _roman !== 'string')
    throw new Error('Invalid input type. Must be a string');

  if (_roman.length === 0)
    throw new Error('Invalid input. Must not be an empty string');

  const reg = new RegExp(
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );

  if (!reg.test(_roman))
    throw new Error('You input is not a valid roman numeral');

  if (basicRnI.hasOwnProperty(_roman)) return basicRnI[_roman];

  let result: number = 0;

  for (let i: number = 0; i < _roman.length; i++) {
    const a: number = basicRnI[_roman[i]];
    const b: number = basicRnI[_roman[i + 1]];
    if (a < b) {
      result -= a;
    } else {
      result += a;
    }
  }

  return result;
}

const Romint = {
  parseInt,
  parseRoman,
};

export default Romint;
