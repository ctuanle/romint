# ROMINT

Simple implementation of roman numerals to integer convertor.

## Installation

```shell
yarn add romint
```

or

```shell
npm install romint
```

## Usage

With typescript:

```ts
import Romint from 'romint';
// or import { parseRoman, parseInt } from 'romint';
const ro = Romint.parseRoman(70);
console.log(ro); // 'LXX'
const num = Romint.parseInt(ro);
console.log(num); // 70
```

With javascript

```js
const romint = require('romint');
console.log(romint.parseInt('MMMCMXCIX')); // 3999
```

Input validating:

- for parseRoman: input must be a positive integer less than 4000
- for parseInt: input must be a valid roman numeral as a string
