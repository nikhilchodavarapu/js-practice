// Javascript program to check whether a number is palindrome or not.

const input = 5435;
let remainingDigits = input;
let reverse = 0;

while (remainingDigits != 0) {
  let lastDigit = remainingDigits % 10;
  remainingDigits = remainingDigits - lastDigit;
  remainingDigits = remainingDigits / 10;
  reverse = reverse * 10 + lastDigit;
}

const suffix = reverse === input ? "is palindrome" : "is not palindrome";  // Checking whether palindrome or not.
console.log(input, suffix);