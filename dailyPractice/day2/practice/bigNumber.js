// Javascript program to find which of two numbers is big.

const x = 10;
const y = 20;

console.log();
// Using if/else
console.log("Using if/else");
if (x < y){
    console.log(y, "is the biggest number");
} else{
    console.log(x, "is the biggest number");
}

console.log();
// Using only one if
console.log("Using only one if");

let z = y;
if (x > y){
    z = x;
}
console.log(z, "is the biggest number");

console.log();
// Using ternary operator
console.log("Using ternary operator");
(x < y) ? console.log(y, "is the biggest number") : console.log(x, "is the biggest number");