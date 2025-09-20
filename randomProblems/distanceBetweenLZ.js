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
    isLion = true;
    isZebra = false;
} else if (input[1] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}

// Checking whether is there any space in third character
if (input[2] === " "){
    distance++;
} else if (input[2] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
    isLion = true;
    isZebra = false;
} else if (input[2] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}

// Checking whether is there any space in fourth character
if (input[3] === " "){
    distance++;
} else if (input[3] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
    isLion = true;
    isZebra = false;
} else if (input[3] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}

// Checking whether is there any space in fifth character
if (input[4] === " "){
    distance++;
} else if (input[4] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
    isLion = true;
    isZebra = false;
} else if (input[4] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}

// Checking whether is there any space in sixth character
if (input[5] === " "){
    distance++;
} else if (input[5] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
    isLion = true;
    isZebra = false;
} else if (input[5] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}

// Checking whether is there any space in seventh character
if (input[6] === " "){
    distance++;
} else if (input[6] === "L" && isLion === false){
    console.log(distance);
    distance = 0;
    isLion = true;
    isZebra = false;
} else if (input[6] === "Z" && isZebra === false){
    console.log(distance);
    distance = 0;
    isLion = false;
    isZebra = true;
}
