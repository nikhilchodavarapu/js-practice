// Program to find the closest zebra to Lion.

const savannah = "L L Z Z L";

let isLion = savannah[0] === "L";
let isZebra = savannah[0] === "Z";
let isSpace = savannah[0] === " ";

let distance = 0;
let minimumDistance = savannah.length;

const lengthOfSavannah = savannah.length;

for (let currentCharacter = 1; currentCharacter < lengthOfSavannah; currentCharacter++) {
    if (savannah[currentCharacter] === " " && isSpace === false) {
        distance++;
    } else if (savannah[currentCharacter] === "L" && isLion === false) {
        minimumDistance = minimumDistance > distance ? distance : minimumDistance;
        distance = 0;
        isLion = true;
        isZebra = false;
        isSpace = false;
    } else if (savannah[currentCharacter] === "Z" && isZebra === false) {
        minimumDistance = minimumDistance > distance ? distance : minimumDistance;
        distance = 0;
        isLion = false;
        isZebra = true;
        isSpace = false;
    } else {
        distance = 0;
    }
}

if (minimumDistance === lengthOfSavannah) {
    minimumDistance = -1;
}

console.log("Minimum distance between Lion and Zebra is", minimumDistance);
