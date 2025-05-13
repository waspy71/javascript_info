// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// yes if we return the same object object explicitly

let obj = {}

function A() { return obj }
function B() { return obj }

alert(new A() == new B()) // true since both return the same object (reference)


// Create a constructor function Calculator that creates objects with 3 methods:

//     read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product of these properties.


function Calculator() {
  this.read = function() {
    this.a = +prompt("a = ?", 0)
    this.b = +prompt("b = ?", 0)
  },
  this.sum = function() {
    return this.a + this.b
  },
  this.mul = function() {
    return this.a * this.b
  }
}

let fun = new Calculator()

fun.read()
alert('sum of a + b = ' + fun.sum())
alert('mul of a * b = ' + fun.mul())


// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

//     Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//     The read() method should use prompt to read a new number and add it to value.

// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue) {
  this.value = startingValue,
  this.read = function() {
    this.value += +prompt("new number: ", 0)
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values