
// 1.Sum numbers from the visitor

//Create a script that prompts the visitor to enter two numbers and then shows their sum.

let num1 = +prompt('first number: ')
let num2 = +prompt('second number: ')

alert(num1 + num2)

// 2.Why 6.35.toFixed(1) == 6.3?

//According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

//Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.
alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( 1.35.toFixed(20) ); // 1.35000000000000008882
//How can we fix the problem with 6.35 if we want it to be rounded the right way?
//We should bring it closer to an integer prior to rounding:
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
//Note that 63.5 has no precision loss at all. That’s because
//  the decimal part 0.5 is actually 1/2. Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


//3.Repeat until the input is a number

let num

do {
 num = +prompt('Enter a number', '') //wrong since we have to handle empty string/null
} while (Number.isFinite(num))

//answear
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

//The solution is a little bit more intricate that it could be because we need to handle null/empty lines.
//So we actually accept the input until it is a “regular number”. Both null (cancel) and empty line also fit 
//that condition, because in numeric form they are 0.
//After we stopped, we need to treat null and empty line specially (return null), because converting them to a number would return 0.



//4.An occasional infinite loop

//This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

let j = 0;
while (j < 11) {
  j += 0.2;
  if (j > 9.8 && j < 10.2) alert( j );  // gives out 9.999999999999996 and 10.199999999999996 respectively
}

//when adding fractions the binary representation will never equal "natural numbers" which are defined in binary
//it happens because of imprecise calculation and loss of precision when working with fractional units in binary
//Conclusion: evade equality checks when working with decimal fractions.



//5.A random number from min to max

//wrong
let max = +prompt('Max No: ', 0)
let min = +prompt('Min No: ', 0)

function random(min, max) {
  let num1 = Math.floor(Math.random() * max)
  let num2 = Math.floor(Math.random() * min)

  return num1 + num2
}

alert(`Result: ${random(min, max)}`)

//solution
function random(min, max) {
  return min + Math.random() * (max - min);
}


//6.A random integer from min to max

function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );


















