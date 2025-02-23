

// Task 1

if ("0") {
  alert( 'Hello' ); // "0" evaluates to true, so alert will be shown
}


// Task 2

let answear = prompt('What is the “official” name of JavaScript?')

if (answear === 'ECMAScript') {
  alert('Right')
} else {
  alert('You don’t know? ECMAScript!')
}

// Task 3

let number = +prompt('Number: ')

if (number > 0) {
  alert(`1`)
} else if (number < 0) {
  alert(`-1`)
} else {
  alert('0')
}

// Task 4

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

//rewrite with '?'

let resultRewritten = a + b < 4 ? 'Below' : 'Over'

// Task 5

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let messageRewritten = (login == 'Employee') ? 'Hello' : 
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : ''