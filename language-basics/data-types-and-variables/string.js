// String concatenation using + operator

let firstName = "Madhan"
let space = " "
let lastName = "K"

let fullName = firstName + space + lastName;
console.log(fullName);

// Escape sequences
//
//  \n: new line
//  \t: Tab, means 8 spaces
//  \\: Back slash
//  \': Single quote (')
//  \": Double quote (")

console.log('\t\t*\t')
console.log('\t*\t\t*\t')
console.log('*\t\t*\t\t*')

// Template Literals (Template Strings)
let result = `Sum of two numbers is: ${2 + 2}`
console.log(result)

let fName = "Madhan"
console.log(`My name is ${fName}`)

// using substitutions
let place = "World"
let year = 2020

console.log('Hello, %s!', place);
console.log('This year is, %d!', year);

// String methods

let js = 'JavaScript'

console.log(js.length) // returns number of characters in a string
console.log(js[0]) // J - returns the first character of a string
console.log(js.toUpperCase())
console.log(js.toLowerCase())

// substr() - sub string takes two arguments, beginning at the specified location and having the specified length.
console.log(js.substr(4,6)) // Script
console.log(js.substr(0, 4)) // Java

// substring() - It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(js.substring(0,4)) // Java
console.log(js.substring(4, 10)) // Script

// split() - Splits a string into substrings using the specified separator and return them as an array.
let string = 'I am Madhan'
let fruits = "Apple, Mango, Papaya"

console.log(string.split())     // Changes to an array -> ["I am Madhan"]
console.log(string.split(' '))  // Split to an array at space -> ["I", "am", "Madhan"]
console.log(fruits.split(",")) // [ 'Apple', ' Mango', ' Papaya' ]

// trim() - removes spaces in the beginning or the end of a string
let msg = "   Learning JS    "
console.log(msg.trim())

// includes() - takes substring as an argument, it checks if that arguments is present in the string and returns boolean
console.log(js.includes('Script')) // true
console.log(js.includes('script')) // false - case sensitive

// replace() - replaces with new value
console.log(js.replace('Java', 'ECMA')) // ECMAScript

// charAt() - returns the value at the given index
console.log(js.charAt(4)) // S
console.log(js.charAt(js.length-1)) // t - last index of the string

// indexOf() - takes the sub-string and returns first index position
console.log(js.indexOf('a')) //1
console.log(js.indexOf('Script')) //4
console.log(js.indexOf('Python')) //-1 - if sub-string does not exists

// lastIndexOf() - takes the sub-string and returns last index position
console.log(js.lastIndexOf('a')) // 3
console.log(js.indexOf('Python')) //-1 - if sub-string does not exists

// concat() - takes n number of sub-string and joins it
console.log(js.concat("In","30", "Days")) // JavaScriptIn30Days

// startsWith() - takes substring as an argument, it checks if that arguments is starts with that string and returns boolean
console.log(js.startsWith("Java")) // true
console.log(js.startsWith("Script")) // false
console.log(js.startsWith("J")) // true
console.log(js.startsWith('s')) // false

// endsWith() - takes substring as an argument, it checks if that arguments is ends with that string and returns boolean
console.log(js.endsWith("Java")) // false
console.log(js.endsWith("Script")) // true
console.log(js.endsWith("t")) // true
console.log(js.startsWith('s')) // false

// search() - takes substring as an argument, it returns the index of first match. Search value can be a string or regex
console.log(js.search(/S/)) // 4
console.log(js.search("ava")) // 1
console.log(js.search("exp")) // -1 - if sub-string does not exists

// match() - takes substring as an argument, it returns an array if matches. Search value can be a string or regex

console.log(js.match('Java')) // [ 'Java', index: 0, input: 'JavaScript', groups: undefined ]
console.log(js.match('test')) // null - if there is no match