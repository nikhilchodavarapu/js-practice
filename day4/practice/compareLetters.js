const input = "rotavator";

let isEqual = true;
let startIndex = 0;
let lastIndex = input.length - 1;

// comparing first and last letters in rotavator.
if (input[startIndex] !== input[lastIndex]){
  isEqual = false;
}
startIndex++;
lastIndex--;

// comparing second and last second letters in rotavator.
if (input[startIndex] !== input[lastIndex]){
  isEqual = false;
}
startIndex++;
lastIndex--;

// comparing third and last third letters in rotavator.
if (input[startIndex] !== input[lastIndex]){
  isEqual = false;
}
startIndex++;
lastIndex--;

// comparing fourth and last fourth letters in rotavator.
if (input[startIndex] !== input[lastIndex]){
  isEqual = false;
}
startIndex++;
lastIndex--;

// Since Every letter is equal until middle one.
console.log(isEqual);
