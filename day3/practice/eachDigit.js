const input = 12345;
let remainingDigits = input;

while (remainingDigits != 0) {
  let lastDigit = remainingDigits % 10;
  console.log(lastDigit)

  remainingDigits = remainingDigits - lastDigit;
  remainingDigits = remainingDigits / 10;
  console.log(remainingDigits);
}


// remainder = temp % 10; // last 2 digit
// console.log(remainder)

// temp = temp - remainder;
// temp = temp / 10;         // removing last 2 digit
// console.log(temp);


// remainder = temp % 10; // last 3 digit
// console.log(remainder)


// temp = temp - remainder;
// temp = temp / 10;         // removing last  digit
// console.log(temp);

// remainder = temp % 10; // last 4 digit
// console.log(remainder)

// temp = temp - remainder;
// temp = temp / 10;         // removing last 4 digit
// console.log(temp);


// remainder = temp % 10; // last 5 digit
// console.log(remainder)

// temp = temp - remainder;
// temp = temp / 10;         // removing last 5 digit
// console.log(temp);