
// Task 1
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Task 2
let aa = 2;

let x = 1 + (aa *= 2); // after the code is run the value of aa = 4 and the value of x = 5

// Task 3
"" + 1 + 0   // 10
"" - 1 + 0  // -1
true + false  // 1
6 / "3"  // 2
"2" * "3"  // 6
4 + 5 + "px"  // 9px
"$" + 4 + 5  // '$45'
"4" - 2  // 2
"4px" - 2  // error / NaN
"  -9  " + 5  // ' -9 5'
"  -9  " - 5  // -14
null + 1  // 1
undefined + 1  // NaN
" \t \n" - 2  // Space characters are trimmed off string start and end when a string is converted to a number. 
              // Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. 
              // So, similarly to an empty string, it becomes 0.

// Task 4
let aaa = prompt("First number?", 1); // or +prompt("First number?", 1) converts 'propmpt' to a number at assignment
let bbb = prompt("Second number?", 2);

alert(aaa + bbb); // "12" it's a string
alert(+aaa + +bbb); // 3 number
      //or
alert(Number(aaa) + Number(bbb)); // 12



