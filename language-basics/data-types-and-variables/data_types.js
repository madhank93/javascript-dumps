/*

Data types:
Undefined, null, boolean, string, symbol, number, bigint and Object.

Variable:
var, let (preferred way) and const

*/

const foo = 1;
let bar = foo;
let firstName = "Madhan";
let lastName; // undefined  

bar = 9;

console.log(foo, bar,firstName, lastName);

/*
Variable naming
    There are two limitations on variable names in JavaScript:
        * The name must contain only letters, digits, or the symbols $ and _.
        * The first character must not be a digit.
*/

let myVeryLongName;
let test123;
const PI = 3.14;

// Numbers - Numbers are integers and decimal values
let n = 123;
n = 12.345;

// BigInt
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String (are represented in Double quotes, Single quotes, Back-ticks)
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
// Back-ticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; // String interpolation

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;

// "null" value
let age = null;

// "undefined" value (The meaning of undefined is “value is not assigned”)
let mobileNumber;

//object for more complex data structures.

//symbol for unique identifiers.

// typeof operator
let num = 0;
let fname = "Madhan";

console.log(typeof(num), typeof(fname));










