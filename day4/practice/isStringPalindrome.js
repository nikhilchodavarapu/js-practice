// Javascript program to check whether string is palindrome or not.

const wordToCheck = "malayalam";

let isEqual = true;
let startIndex = 0;
let lastIndex = wordToCheck.length - 1;

// Comapring correspoinding letters from both ends
while ((startIndex < lastIndex) && isEqual) {
  if (wordToCheck[startIndex] !== wordToCheck[lastIndex]) {
    isEqual = false;
  }
  startIndex++;
  lastIndex--;
}

const suffix = isEqual ? "is a palindrome" : "is not a palindrome";
console.log(wordToCheck, suffix);
