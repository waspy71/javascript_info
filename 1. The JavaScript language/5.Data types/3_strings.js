

//1.Uppercase the first character
//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:


function ucFirst(str) {
  let newStr = str[0].toUpperCase() + str.slice(1)  // We can’t “replace” the first character, because strings in JavaScript are immutable.

  return newStr         // so we create a new string based on the existing one, with the uppercased first character
}

alert( ucFirst("john") == "John" )

//Their solution
function ucFirst(str) {
  if (!str) return str;   // since if 'str' is empty there's going to be an error so we failcheck

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John




//2.Check for spam
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:

function checkSpam(str) {   //my work but it was not really understood with alerts
  if(str.toLowerCase().includes('viagra')) {
    return true
  } else if (str.toLowerCase().includes('xxx')) {
    return true
  }

  return false
}

//their solution
function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // so we get rid of case sensitive check

  return lowerStr.includes('viagra') || lowerStr.includes('xxx'); // this '.includes()' returns true or false by default
}

alert(checkSpam('buy ViAgRA now') == true)
alert(checkSpam('free xxxxx') == true)
alert(checkSpam("innocent rabbit") == false)



//3.Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str and, 
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:

function truncate(str, maxlength) {
  if( str.length > maxlength) {
    return str.slice(0, maxlength) + '...'
  }

  return str

}

//their solution is more elegant (if the function does something short)
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' : str
}

alert(truncate("What I'd like to tell on this topic is:", 20))// == "What I'd like to te…"

alert(truncate("Hi everyone!", 20)) // == "Hi everyone!"



//4.Extract the money
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
// The example:

//works but using parseInt is rather pointless since we are stripping the symbol so there is nothing else to do
//but to convert numerical string into number
function extractCurrencyValue(str) {
  return parseInt(str.slice(1))
}

//their solution
function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true