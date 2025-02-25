

// Task 1

let i = 3;

while (i) {
  alert( i-- ); // last value alerted is 1 (since i-- returns value first then -- part evaluates to new value)
}


// Task 2

let j = 0;
while (++j < 5) alert( j ); // alert 1/2/3/4 prefix makes it return already incremented value so 1

let k = 0;
while (k++ < 5) alert( k ); // alert 1/2/3/4/5 postfix returns old value first so 0


// Task 3

for (let i = 0; i < 5; i++) alert( i ); // 0/1/2/3/4

for (let i = 0; i < 5; ++i) alert( i ); // 0/1/2/3/4

// That can be easily deducted from the algorithm of for:

//    1. Execute once i = 0 before everything (begin).
//    2. Check the condition i < 5
//    3. If true – execute the loop body alert(i), and then i++

// The increment i++ is separated from the condition check (2). That’s just another statement.

// The value returned by the increment is not used here, so there’s no difference between i++ and ++i.


// Task 4

for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) alert(i)
}


// Task 5 

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

while(i < 3) {
  alert( `number ${i}!` );
  i++
}


// Task 6

let number // gotta declare number outside the loop

do {
  number = prompt('Provide a number greater than 100: ')
} while ( number <= 100 && number )

// Task 7

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
