// Javascript program to perform various operations on strings.

// Concatenation
const firstName = "Virat";
const lastName = "Kohli";
const fullName = firstName + " " + lastName;
console.log(fullName)

// Number to string Conversion
let number = 5;
let string = number + "";
console.log(number, "=>", string);

// Finding length of a string
const lengthOfName = fullName.length;
console.log("Length of the string '", fullName, "' is", lengthOfName);

// Retriving characters from a string
const firstCharcter = fullName[0];
const secondCharcter = fullName[1];
const lastSecondCharcter = fullName[fullName.length - 2];
const lastCharcter = fullName[fullName.length - 1];
console.log("First Character =>", firstCharcter);
console.log("Second Character =>", secondCharcter);
console.log("Last Second Character =>", lastSecondCharcter);
console.log("Last Character =>", lastCharcter);

// String to Number Conversion
string = "18"
number = string * 1;
console.log(string, "=>", number);
