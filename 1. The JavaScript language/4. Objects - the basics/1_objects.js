

// Task 1

// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

let user = {}
user.name = 'John'
user.surename = 'Smith'
user.name = 'Pete'
delete user.name

// Task 2

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};
console.log(isEmpty(schedule))
// alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule))
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false
  }

  return true
}

// Task 3

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0

for (let salary in salaries) {
  sum += salaries[salary]
}

console.log(sum)

// Task 4

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

function multiplyNumeric(obj) {
  for ( let key in obj) {
    if (!+obj[key]) continue
    
    obj[key] += obj[key]
    console.log('here', obj[key])
  }
}

multiplyNumeric(menu)
console.log(menu)