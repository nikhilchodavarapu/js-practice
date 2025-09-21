// Javascript program that counts how often a given sequence of `0`s and `1`s (a **substring**) appears 
// inside the binary representation of a number. Substring occurrences may overlap.
// Without process.

let number = 65;
let substring = 1;
let temp = number;
let binary = 0;
let length = 0;
// let ten = 10;
let count = 1;
let count2 = 0;

while (temp >= 1){
  let remainder = temp % 2;
  binary += count * remainder ;
  temp = (temp - remainder) / 2;
  count *= 10;
  // console.log(binary);
  count2 += 1;
}

console.log("Binary => ",binary)

if (substring < 10){
  length = 1
} else if (substring < 100){
  length = 2
} else if (substring < 1000){
  length = 3
} else {
  console.log("Sorry for Inconvenience")
}

// console.log(length)

let divisor = 1;
let finalCount = 0;
for (let i = 1; i <= length; i++){
  divisor *= 10;
}
let divident = binary
temp = binary
let remainder2;
while (temp >= substring){
  let remainder = temp % divisor;
  if (remainder == substring){
    finalCount += 1;
  }
  remainder2 = temp % 10;
  // console.log(remainder)
  temp = (temp - remainder2)/10;
}
// console.log(temp)
if (temp == substring){
  finalCount += 1;
}
console.log("count = ",finalCount)
