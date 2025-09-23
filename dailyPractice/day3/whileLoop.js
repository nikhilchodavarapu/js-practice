// Javascript program to perform while loop.
// Program to print all odd and even numbers separately from 1 to 30.

let currentNumber = 1;
let endingNumber = 30;

console.log("Odd Even")
while (currentNumber <= endingNumber){
  console.log(currentNumber, "  ", ++currentNumber);
  currentNumber += 1;
}