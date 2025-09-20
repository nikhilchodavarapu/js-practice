const input = "L  ZL Z";

let isLion = input[0] === "L";
let isZebra = input[0] === "Z";
let isSpace = input[0] === " ";

let distance = 0;

// Findind distance between First L and Z
// Checking whether is there any space in second character
if (input[1] === " "){
    distance++;
} else if (input[1] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
} else if (input[1] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
}

// Checking whether is there any space in third character
if (input[2] === " "){
    distance++;
} else if (input[2] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
} else if (input[2] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
}

// Checking whether is there any space in fourth character
if (input[3] === " "){
    distance++;
} else if (input[3] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
} else if (input[3] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
}
