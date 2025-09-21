const decimalNumber = 65;
let binaryDigits = 0;
let currentPlace = 1;
let remainingQuotient = decimalNumber;

// ones place - 1 in binary 
let currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// tens place - 2 in binary
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// hundreds place - 4 in binary 
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// thousands place - 8 in binary 
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// ten thousands place - 16 in binary 
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// lakhs place - 32 in binary
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

// ten lakhs place - 64 in binary
currentRemainder = remainingQuotient % 2;
binaryDigits += currentPlace * currentRemainder;
remainingQuotient = (remainingQuotient - currentRemainder) / 2;
currentPlace *= 10;

let binaryEquivalent = binaryDigits;
console.log(decimalNumber, "=>", binaryEquivalent);
