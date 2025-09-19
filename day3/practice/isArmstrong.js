const input = 1634;
let remainingDigits = input;
let sum = 0;
let count = 0;

while (remainingDigits != 0){
  let lastDigit = remainingDigits % 10;
  remainingDigits = remainingDigits - lastDigit;
  remainingDigits = remainingDigits / 10;
  count += 1;
}

remainingDigits = input;
while (remainingDigits != 0) {                       
  let lastDigit = remainingDigits % 10;
  remainingDigits = remainingDigits - lastDigit;
  remainingDigits = remainingDigits / 10;
  let product = 1;
  for (let counter = 1; counter <= count; counter++){
    product *= lastDigit;
  }
  sum += product;
}

const suffix = sum === input ? "is an armstrong number" : "is not an armstrong number";
console.log(input, suffix);