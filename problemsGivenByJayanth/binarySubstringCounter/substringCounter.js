const binaryNumber = 1111;
const substring = 11;

let numberModified = substring;
let lastDigitsBase = 1;

// finding last digits base based on number of digits in substring to compare last digits with substring.
while ( numberModified >= 1){
    lastDigitsBase = lastDigitsBase * 10;
    numberModified = numberModified / 10;
}

let binaryDigits = binaryNumber;
let count = 0;

while ( binaryDigits !== 0 ){
    let lastDigits = binaryDigits % lastDigitsBase;
    if ( lastDigits === substring ){
        count++;
    }
    let lastDigit = binaryDigits % 10;
    binaryDigits = (binaryDigits - lastDigit) / 10;
}

console.log(count)
