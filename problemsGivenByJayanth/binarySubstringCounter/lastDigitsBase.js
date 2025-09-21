const number = 973;
let numberModified = substring;
let lastDigitsBase = 1;

while ( numberModified >= 1){
    lastDigitsBase = lastDigitsBase * 10;
    numberModified = numberModified / 10;
}

console.log(lastDigitsBase)
