const number = 973;
let numberModified = number;
let numberOfDigits = 0;

while ( numberModified >= 1){
    numberOfDigits++;
    numberModified = numberModified / 10;
}

console.log("Number of Digits in", number, "is", numberOfDigits);

let lastDigitsBase = 10 ** numberOfDigits;
