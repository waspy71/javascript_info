



//1.Is array copied?
//What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? --> length is 4 since arrays act like objects (they are copied by reference)




//2.Array operations.
// Let’s try 5 array operations.

//     Create an array styles with items “Jazz” and “Blues”.
//     Append “Rock-n-Roll” to the end.
//     Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//     Strip off the first value of the array and show it.
//     Prepend Rap and Reggae to the array.

// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ['Jazz', 'Blues']

styles.push('Rock-n-Roll')
alert(styles)


// testing for odd and even arrays
let even = ['one', 'two', 'three', 'four']
let odd = ['one', 'two', 'three', 'four', 'five']
function replaceMiddle(arr) {
  if(arr.length != 1 ) {
    if(arr.length % 2 != 0) {
      let middle = Math.trunc(arr.length / 2)
      arr[middle] = 'Classics'
    }
  }
  return arr
}

replaceMiddle(styles)
alert(`style array : ${styles}`)

replaceMiddle(even)
alert(`EVEN array : ${even}`)

replaceMiddle(odd)
alert(`ODD array : ${odd}`)

alert(styles.shift())
alert(styles)

styles.unshift('Rap', 'Reggae')
alert(styles)

// Their solution
let styles2 = ["Jazz", "Blues"];
styles2.push("Rock-n-Roll");
styles2[Math.floor((styles2.length - 1) / 2)] = "Classics";  // this apply to both odd and even numbers?? it's wrong when doing even
alert( styles2.shift() );
styles2.unshift("Rap", "Reggae");

//3.Calling in an array context
// What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? -- > arrays are basically objects so calling arr[2]() should result in displaying string representation of the array (correct)


//4. Sum input numbers
// Write the function sumInput() that:

//     Asks the user for values using prompt and stores the values in the array.
//     Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//     Calculates and returns the sum of array items.

// P.S. A zero 0 is a valid number, please don’t stop the input on zero.
////

let values = [] 

function sumInput() {

  while (1) {
    let value = +prompt('Enter a number: ')
    let sum = 0
  
    if(Number.isFinite(value)) { // doesnt check for null because we convert +value (null after pressing esc becomse '0')
      values.push(value)
      // alert(values.length)
    } else {
      for (let val of values) {
        // alert(`val = ${val}`)
        sum += val
        // alert(`sum = ${sum}`)
      }
      return sum
    }
  }
}

alert(`the sum is ${sumInput()}`)


//their solution
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );





//5.A maximal subarray (THIS IS BEYOND THE SCOPE WHICH AUTHORS DONT REALISE) (eventually to continue in the future)

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.


let arr1 = [-1, 2, 3, -9] // 5
let arr2 = [2, -1, 2, 3, -9] // 6
let arr3 = [-1, 2, 3, -9, 11] // 11

// -1 + 2
function getMaxSubSum(arr) {
  let sum = 0 // 5
  let cont = 0  // 2
  
  for(let i = 0; i < arr1.length; i++) {
  
    if(arr1[i] > 0) {
      if(arr[i] + cont >= arr1[i]) {
        sum += arr[i] + cont
      } else {
        cont += arr[i]
      }
    }
  }
  return sum
}

alert( getMaxSubSum(arr1) )


////
// let arr1 = [-1, 2, 3, -9] // 5
// let arr3 = [-1, 2, 3, -9, 11] // 11

// -1 + 2
// let arr1 = [2, -1, 2, 3, -9] // 5
// let arr3 = [-1, 2, 3, -9, 11] // 11

// -1 + 2
function getMaxSubSum() {
  
  let arr1 = [2, -1, 2, 3, -9] // 6
  let sum = 0 // 5
  let cont = 0  // 2
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] > 0) {
      if(arr1[i] + cont >= arr1[i]) {
        alert(`second IF ${arr1[i]}`)
        sum += arr1[i] + cont
        alert(`SUM is ${sum}`)


      } else {
        cont += arr[i]
      }
    } else {
      cont += arr[1]
    }
  }
  return sum
}

alert( getMaxSubSum() )






