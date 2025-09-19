// Javascript program to perform lexicographical scoping.

let x = 10;
console.log("Outside x =>", x)
{
  let y = 10;
  console.log("Inside a block y =>", y)
}
// console.log("Outside a block y =>", y)

if (1){
  // console.log("Inside if x =>", x)
  let x = 15;
  console.log("Inside if x =>", x)
  if (1){
    let x = 20;
    console.log("Inside of inside if x =>", x)
  }
}
