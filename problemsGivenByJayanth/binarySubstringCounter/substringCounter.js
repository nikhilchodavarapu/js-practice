const binaryNumber = 1000001;
const substring = 10;

let numberModified = substring;
let lastDigitsBase = 1;

// finding last digits base based on number of digits in substring to compare last digits with substring.
while ( numberModified >= 1){
    lastDigitsBase = lastDigitsBase * 10;
    numberModified = numberModified / 10;
}

let binaryDigits = binaryNumber;
let count = 0;

// Comparing last two digits
let lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
let lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

// Comparing second last two digits
lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

// Comparing third last two digits
lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

// Comparing fourth last two digits
lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

// Comparing fifth last two digits
lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

// Comparing sixth last two digits
lastDigits = binaryDigits % lastDigitsBase;
if ( lastDigits === substring ){
    count++;
}
lastDigit = binaryDigits % 10;
binaryDigits = (binaryDigits - lastDigit) / 10;

console.log(count)
