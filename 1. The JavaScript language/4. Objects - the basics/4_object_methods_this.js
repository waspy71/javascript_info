


// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? Error: Cannot read property 'name' of undefined


// Create an object calculator with three methods:

let calculator = {
  // a: '',   // no need for these variables, this.a cretes it automaticaly when assigning value
  // b: '',
  read() {
    this.b = +prompt('value b?')
    this.a = +prompt('value a?')
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//There’s a ladder object that allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

// Modify the code of up, down, and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0