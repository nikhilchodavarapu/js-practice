const wordToCheck = "racecar";

let isEqual = true;
let startIndex = 0;
let lastIndex = wordToCheck.length - 1;

while (startIndex < lastIndex) {
  if (wordToCheck[startIndex] !== wordToCheck[lastIndex]) {
    isEqual = false;
  }
  startIndex++;
  lastIndex--;
}

const suffix = isEqual ? "is a palindrome" : "is not a palindrome";
console.log(wordToCheck, suffix);
