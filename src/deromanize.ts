export default function deromanize(_roman: string): number {
  const basic: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (basic.hasOwnProperty(_roman)) return basic[_roman];

  let result: number = 0;

  for (let i: number = 0; i < _roman.length; i++) {
    const a: number = basic[_roman[i]];
    const b: number = basic[_roman[i + 1]];
    if (a < b) {
      result -= a;
    } else {
      result += a;
    }
  }

  return result;
}
