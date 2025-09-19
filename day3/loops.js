// Javascript program to perform while loop.
// Program to print all odd and even numbers separately from 1 to 30.

let currentNumber = 1;
let endingNumber = 30;

console.log("While loop");
console.log("Odd Even");
while (currentNumber <= endingNumber){
  console.log(currentNumber, "  ", ++currentNumber);
  currentNumber += 1;
}

// Javascript program to perform for loop
// Program to print a table of number

const number = 3;
console.log("For Loop");
for ( let multiplier = 1; multiplier <= 10; multiplier++){
  console.log(number, "x", multiplier, "=", number*multiplier);
}
