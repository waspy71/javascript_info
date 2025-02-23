

// Task 1

alert( null || 2 || undefined ); // output is 2

// Task 2

alert( alert(1) || 2 || alert(3) ); // 'alert(1)' will output '1' in the browser but return 'undefined' and then '2' is returned
                                    // since alert function doesn't return value(undefined) so the || looks for 'true'
                                    // only IF the function returns 'true' value it will be seen as 'truthy'

// Task 3

alert( 1 && null && 2 ); // output is null

// Task 4

alert( alert(1) && alert(2) ); // output is first '1' then 'undefined'  - alert is invoked then value 'undefined' is returned and it stops


// Task 5

alert( null || 2 && 3 || 4 ); // first expression = true(returns 2), second expression = true(returns 3), both are true so 
                              // the last true is returned = 3

// Task 6
let age = 15
if( age >= 14 && age <= 90 ) {
  alert('ok')
}


// Task 7

if ( !(age >= 14 && age <= 90)) {}
if ( age < 14 || age > 90) {}


// Task 8

// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' );  //  executes, returns 'truthy' then '0'
if (-1 && 0) alert( 'second' ); // wont execute, returns 'falsy' then '0'
if (null || -1 && 1) alert( 'third' ); // executes, returns truthy('-1 && 1')


// Task 9

let login = prompt("Who's there: ")

if( login === 'Admin') {
  let password = prompt('Password: ')

  if( password === '' || password === null) {
    alert('Canceled')
  } else if ( password === 'TheMaster' ){
    alert("Welcome")
  } else {
    alert("I don't know you")
  }
} else if ( !(login === 'Admin') ) {
  alert("I don't know you")
} else {
  alert('Canceled')
}
