const input = "rotavator";

let isEqual = true;
let startIndex = 0;
let lastIndex = input.length - 1;

while (startIndex < lastIndex) {
  if (input[startIndex] !== input[lastIndex]) {
    isEqual = false;
  }
  startIndex++;
  lastIndex--;
}
console.log(isEqual);
