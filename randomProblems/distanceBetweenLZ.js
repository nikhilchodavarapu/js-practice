const input = "   Z   L";

let isLion = input[0] === "L";
let isZebra = input[0] === "Z";
let isSpace = input[0] === " ";

let distance = 0;
let minimumDistance = input.length;

const lengthOfInput = input.length;

for (let currentCharacter = 1; currentCharacter < lengthOfInput; currentCharacter++){
    if (input[currentCharacter] === " " && isSpace === false){
        distance++;
    } else if (input[currentCharacter] === "L" && isLion === false){
        console.log(distance);
        minimumDistance = minimumDistance > distance ? distance : minimumDistance;
        distance = 0;
        isLion = true;
        isZebra = false;
        isSpace = false;
    } else if (input[currentCharacter] === "Z" && isZebra === false){
        minimumDistance = minimumDistance > distance ? distance : minimumDistance;
        console.log(distance);
        distance = 0;
        isLion = false;
        isZebra = true;
        isSpace = false;
    } else{
        distance = 0;
    }
}

if (minimumDistance === input.length)
{
    minimumDistance = -1;
}
console.log("minimum distance =>", minimumDistance);
