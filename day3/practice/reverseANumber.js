const numberToReverse = 12345;
let remainingDigits = numberToReverse;
let reversedNumber = 0;

while (remainingDigits != 0) {
  let lastDigit = remainingDigits % 10;
  remainingDigits = remainingDigits - lastDigit;
  remainingDigits = remainingDigits / 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
}

console.log("Reverse of", numberToReverse, "=>", reversedNumber);
