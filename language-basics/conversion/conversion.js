//String Conversion

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

console.log( "6" / "2" ); // 3, strings are converted to numbers

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

//Boolean Conversion

/*
The conversion rule:
    * Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
    * Other values become true.
*/

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)