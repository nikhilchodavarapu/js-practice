// Program that counts how often a given sequence of `0`s and `1`s (a substring) appears inside the binary representation of a number.

const decimalNumber = 65;
const substring = 10;

// Converting Decimal to Binary.
let binaryDigits = 0;
let currentPlace = 1;
let remainingQuotient = decimalNumber;

while (remainingQuotient > 0){
    let currentRemainder = remainingQuotient % 2;
    binaryDigits += currentPlace * currentRemainder;
    remainingQuotient = (remainingQuotient - currentRemainder) / 2;
    currentPlace *= 10;
}

let binaryEquivalent = binaryDigits;
console.log(decimalNumber, "=>", binaryEquivalent);

// finding last digits base based on number of digits in substring to compare last digits with substring.
let numberModified = substring;
let lastDigitsBase = 1;

while ( numberModified >= 1){
    lastDigitsBase = lastDigitsBase * 10;
    numberModified = numberModified / 10;
}

// counting occurence of the substring.
let occurrence = 0;
while ( binaryDigits !== 0 ){
    let lastDigits = binaryDigits % lastDigitsBase;
    if ( lastDigits === substring ){
        occurrence++;
    }
    let lastDigit = binaryDigits % 10;
    binaryDigits = (binaryDigits - lastDigit) / 10;
}

console.log("The occurrence of substring '", substring, "' in number", decimalNumber, "is", occurrence);
