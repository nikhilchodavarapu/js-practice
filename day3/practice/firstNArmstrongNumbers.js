
const limit = 25;
let currentCount = 0;
let currentNumber = 0;
while (limit > currentCount) {

  let remainingDigits = currentNumber;
  let sum = 0;
  let count = 0;

  while (remainingDigits != 0) {
    let lastDigit = remainingDigits % 10;
    remainingDigits = remainingDigits - lastDigit;
    remainingDigits = remainingDigits / 10;
    count += 1;
  }

  remainingDigits = currentNumber;
  while (remainingDigits != 0) {
    let lastDigit = remainingDigits % 10;
    remainingDigits = remainingDigits - lastDigit;
    remainingDigits = remainingDigits / 10;
    let product = 1;
    for (let counter = 1; counter <= count; counter++) {
      product *= lastDigit;
    }
    sum += product;
  }

  let suffix;
  if(sum === currentNumber){
    suffix = "is an armstrong number";
    currentCount++;
    console.log(currentNumber, suffix);
  }
  currentNumber++;
}