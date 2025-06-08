## 5.1 Methods of primitives [link](https://javascript.info/primitives-methods)

A primitive:
- Is a value of a primitive type.
- There are 7 primitive types : `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.
  - `undefined` and `null` are **the most primitive** which means they don't have ways to provide methods.

An object:
- Is capable of storing multiple values as properties.
- Can be created with `{}`, for instance: `{name: "John", age: 30}`. There are other kinds of objects in JavaScript: functions, for example, are objects.

A primitive as an object:
- Primitives are still primitive. A single value, as desired.
- The language allows access to methods and properties of `strings`, `numbers`, `booleans` and `symbols`.
- In order for that to work, a special **“object wrapper”** that provides the extra functionality is created, and then is destroyed.

The **“object wrappers”** are different for each primitive type and are called: `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. Thus, they provide different sets of methods.


### Exercises:
- 1_methods_of_primitives.js


## 5.2 Number [link](https://javascript.info/number)

More ways to write a number:
- when using big numbers we can use **syntactic sugar** for readability : 
  ```javascript 
    let billion = 1000000000
    let billion = 1_000_000_000 //it's the same
  ```
- In JavaScript, we can shorten a number by appending the letter `"e"` to it and specifying the zeroes count:
  ```javascript
    let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
    
    1e3 === 1 * 1000; // e3 means *1000
    1.23e6 === 1.23 * 1000000; // e6 means *1000000

    1e-3 === 1 / 1000; // 0.001 ( -3 divides by 1 with 3 zeroes)

    1.23e-6 === 1.23 / 1000000; // 0.00000123 (-6 divides by 1 with 6 zeroes)

    1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times  (an example with a bigger number)
  ```

Hex, binary and octal numbers:
- Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things
  - written like this `0xff` or `0xFF` (upper or lower case doean't matter)
- Binary `0b11111111` which is 255
- Octal `0o377` also 255
There are only 3 numeral systems with such support. For other numeral systems, we should use the function `parseInt` (which we will see later in this chapter).

toString(base):
- The method `num.toString(base)` returns a string representation of `num` in the numeral system with the given `base`.
  ```javascript 
    let num = 255;

    alert( num.toString(16) );  // ff
    alert( num.toString(2) );   // 11111111
  ```
The `base` can vary from `2` to `36`. By default, it’s 10. Common use cases for this are:
  - **base=16** is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
  - **base=2** is mostly for debugging bitwise operations, digits can be 0 or 1.
  - **base=36** is the maximum, digits can be 0..9 or A..Z. used for url and stuff

  ```javascript 
    //we got to use double dots if we work with raw numbers while
    // calling method directly on a number
    alert( 123456..toString(36) ); // 2n9c
  ``` 

Rounding:
- `Math.floor`
    - Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
- `Math.ceil`
    - Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
- `Math.round`
    - Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
- `Math.trunc` (not supported by Internet Explorer)
    - Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1. 
These functions cover all of the possible ways to deal with the decimal part of a number.

If we’d like to round the number to n-th digit after the decimal like 1.2345 and want to round it to 2 digits, getting only 1.23 there are 2 ways:
- Multiply-and-divide
  ```javascript
  let num = 1.23456; // to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back
  alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
  ```
- The method `toFixed(n)` rounds the number to `n` digits after the point and returns a **string representation** of the result
  ```javascript 
  let num = 12.34;
  alert( num.toFixed(1) ); // "12.3"

  let num = 12.36;
  alert( num.toFixed(1) ); // "12.4"  -- This rounds up or down to the nearest value, similar to Math.round

  let num = 12.34; // result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end
  alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
  ```
We can convert it to a number using the unary plus or a `Number()` call, e.g. write `+num.toFixed(5)`.

Imprecise calculations:
- be careful of `integer imprecision` caused by binary mathematic operations that can cause problems in cash shop apps etc.
- best way is to just use `+sum.toFixed(2)` so it rounds up to 2 decimal digits (for more info check the link)


### Tests: `isFinite` and `isNaN`:

`infinity` / `-Infinity` and `NaN` belong to the type `number`, but are not *“normal”* numbers, so there are special functions to check for them
  - `isNaN(value)` converts its argument to a number and then tests it for being `NaN`:
  ```javascript
  alert( isNaN(NaN) ); // true
  alert( isNaN("str") ); // true
  alert( NaN === NaN ); // false  we cant use the comparison === NaN. The value NaN is unique in that it does not equal anything, including itself
  ```
- `isFinite(value)` converts its argument to a number and returns `true` if it’s a regular number, not `NaN/Infinity/-Infinity`
  ```javascript
  alert( isFinite("15") ); // true
  alert( isFinite("str") ); // false, because a special value: NaN
  alert( isFinite(Infinity) ); // false, because a special value: Infinity
  ```
- `Number.isNaN` and `Number.isFinite` are more strick methods, they do not autoconvert their argument into a number, but check if it belongs to the number type instead

### `parseInt` and `parseFloat`

Numeric conversion using a plus `+` or `Number()` is strict. If a value is not exactly a number, it fails.
To read a number from a string we use `parseInt` and `parseFloat`
  ```javascript
  alert( +"100px" ); // NaN  strict rules!
  alert( parseInt('100px') ); // 100
  alert( parseFloat('12.5em') ); // 12.5

  alert( parseInt('12.3') ); // 12, only the integer part is returned
  alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

  alert( parseInt('a123') ); // NaN, the first symbol stops the process
  ```
`parseInt(str, radix)` has a 2nd parameter specifying the base of the numeral system (hex, binary etc)
  ```javascript
  alert( parseInt('0xff', 16) ); // 255
  alert( parseInt('ff', 16) ); // 255, without 0x also works

  alert( parseInt('2n9c', 36) ); // 123456
  ```

  Other math functions
  - `Math.random()` returns a random number from 0 to 1 (not including 1) e.g.`alert( Math.random() ); // 0.1234567894322`
  - `Math.max(a, b, c...)` and `Math.min(a, b, c...)` returns the greatest and smallest from the arbitrary number of arguments.
  - `Math.pow(n, power)` returns `n` to the given power
  
  other less usefull functions in the link


### Exercises:
- 2_numbers.js