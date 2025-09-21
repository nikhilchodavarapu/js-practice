const decimalNumber = 19;
let binaryDigits = 0;
let currentPlace = 1;
let remainingQuotient = decimalNumber;

while (remainingQuotient > 0){
    let currentRemainder = remainingQuotient % 2;
    binaryDigits += currentPlace * currentRemainder;
    remainingQuotient = (remainingQuotient - currentRemainder) / 2;
    currentPlace *= 10;
}

const binaryEquivalent = binaryDigits;
console.log(decimalNumber, "=>", binaryEquivalent);
