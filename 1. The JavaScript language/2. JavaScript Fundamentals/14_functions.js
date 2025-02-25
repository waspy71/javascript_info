
// Task 1
 
//both functions will behave the same way so else is redundant
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {  
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// Task 2
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

//     Using a question mark operator ?
//     Using OR ||

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?')
}

// Task 3
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:
function min(a, b) {
  return a > b ? a : b
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// Task 4
// Write a function pow(x,n) that returns x in power n. 
// Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
  let n = n
  let result = x

  for(let i = 1; i < n; i++) {
    result *= x
  }
  // can also use
  // return x ** n
  return result
}



















