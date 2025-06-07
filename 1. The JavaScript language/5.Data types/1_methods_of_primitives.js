//What do you think, will it work? What will be shown?

let str = "Hello";

str.test = 5;

alert(str.test);

// depending on if the code is running in the strict mode or not it's going
// to dispaly either undefined(no strict mode) or error(strict mode) since this is a primitive
// value and not an object (primitives cannot store additional data)








