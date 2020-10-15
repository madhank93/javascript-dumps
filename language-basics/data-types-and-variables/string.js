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
let result = `Sum of two numbers is: ${2+2}`
console.log(result)

let fName = "Madhan"
console.log(`My name is ${fName}`)

// String methods

let js = 'JavaScript'

console.log(js.length) // returns number of characters in a string
console.log(js[0]) // returns the first character of a string
console.log(js.toUpperCase())
console.log(js.toLowerCase())

// substr() - sub string two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index
console.log(js.substr(4)) // Script
console.log(js.substr(0,4)) // Java

// split() - Splits a string into substrings using the specified separator and return them as an array.
let string = 'I am Madhan'
let fruits = "Apple, Mango, Papaya"

console.log(string.split())     // Changes to an array -> ["I am Madhan"]
console.log(string.split(' '))  // Split to an array at space -> ["I", "am", "Madhan"]
console.log(fruits.split(",")) // [ 'Apple', ' Mango', ' Papaya' ]


