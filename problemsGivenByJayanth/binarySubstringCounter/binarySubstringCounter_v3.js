// Program that counts how often a given sequence of `0`s and `1`s (a substring) appears inside the binary representation of a number.
// Using String Operations (Works even the substring starts with zero '0').

const decimalNumber = 8;
const substring = "00";

// Converting Decimal to Binary
let reverseBinaryDigits = "";
let remainingQuotient = decimalNumber;

while (remainingQuotient > 0){
    let currentRemainder = remainingQuotient % 2;
    reverseBinaryDigits += currentRemainder;
    remainingQuotient = (remainingQuotient - currentRemainder) / 2;
}
let numberOfDigits = reverseBinaryDigits.length;
let binaryDigits = "";
for (let currentIndex = numberOfDigits-1; currentIndex >= 0; currentIndex--){
    binaryDigits += reverseBinaryDigits[currentIndex];
}
let binaryEquivalent = binaryDigits;
console.log(decimalNumber, "=>", binaryEquivalent);

// counting occurence of the substring.
let occurrence = 0;
for (let currentIndex = 0; currentIndex < numberOfDigits-1; currentIndex++){
    let nextIndex = currentIndex + 1;
    let currentSubstring = binaryEquivalent[currentIndex] + binaryEquivalent[nextIndex];
    if (currentSubstring == substring){
        occurrence++;
    }
}

console.log("The occurrence of substring '", substring, "' in number", decimalNumber, "is", occurrence);
