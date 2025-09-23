// Javascript program to perform logical operations.

let x = 10;
let y = 20;
let z = 15;

if ((x < y) && (x < z)){
  console.log(x ,"is the smallest number");
}
if ((x < y) || (x < z)){
  console.log(x, "might be the smallest number");
}
if (!((x < y) && (x < z))){
  console.log(x, "is not the smallest number");
}
else{
  console.log(x, "is the smallest number");
}