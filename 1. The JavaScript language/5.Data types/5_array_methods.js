//1. Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.


function camelize(str) {
  
  return str
      .split('-')
      .map( (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1, item.length))
      .join('')

}

alert(camelize("background-color"))


//2. Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
// equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

function filterRange(arr, a, b) {
  
  return arr.filter(item => item >= a && item <= b)
}

alert( filtered )



//3. Filter range "in place"-------------------------------------------------
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all 
// values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

let arr3 = [5, 3, 8, 1]

function filterRangeInPlace(arr, a, b) {
  arr3 = arr.filter(item > item > a && item < b)  //wrong since filter returns new array so 'arr3 =' will change the ref to the new arr
}

filterRangeInPlace(arr3, 1, 4)

alert( arr3 )


///their solution
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4); // removed the numbers except from 1 to 4

alert( arr3 ); // [3, 1]



//4.Sort in decreasing order------------------------------------

let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a)
alert( arr4 ); // 8, 5, 2, 1, -10


//5.Copy and sort array -------------------------------------------

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr5 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort()
}

let sorted = copySorted(arr5);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr5 ); // HTML, JavaScript, CSS (no changes)


//5.Create an extendable calculator


function Calculator() {
  this.methods = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
  },
  this.calculate = function(str) {
    let split = str.split(' ')
    a = +split[0]
    op = split[1]
    b = +split[2]

    if( !this.methods[op] || isNaN(a) || isNaN(b) ) {
      return NaN
    }

    return this.methods[op](a, b)
  },
  this.addMethod = function(name, func) {
    this.methods[name] = func
  }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10




// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.



//9.Sort users by age---------------------------------------------------------------------------------------


// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

function sortByAge(arr) {                       //Correct
    arr.sort( (a, b) => a.age - b.age )
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete



//10.Shuffle an array ---------------------------------------------------------------------------------------

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

function shuffle(array) {           // another question unrelated to the topic about advanced algoryithm which is pointless at this time
    array.sort(() => Math.random() - 0.5);
  }
 

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.




//11.Get average age---------------------------------------------------------------------------------------
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {           //Correct
    return arr.reduce( (sum, current) => sum + current.age, 0 ) / arr.length
     
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28




//12.Filter unique array members---------------------------------------------------------------------------------------
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
    let result = [];
 
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
 
    return result;
  }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



//13.Create keyed object from array---------------------------------------------------------------------------------------

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
    return users.reduce( (sum , user) => {
        sum[user.id] = user
        return sum              // got to explicitly state return or it doeasnt assign value? check with AI
    } , {})
}

let usersById = groupById(users);


/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.















