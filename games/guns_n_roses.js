function checkGuess(pick, secretNumber) {
  if (pick.length !== secretNumber.length) {
    console.log("INVALID INPUT");
    return -1;
  }
  let guns = 0;
  let roses = 0;
  for (let index = 0; index < pick.length; index++) {
    if (secretNumber.includes(pick[index])) {
      if (pick[index] === secretNumber[index]) guns++;
      else roses++;
    }
  }
  return [guns, roses];
}

function displayResult(remainingChances, result) {
  if (remainingChances === 1) return;
  const symbol = result === 1 ? '📈' : '📉';
  const moreOrLess = result === -1 ? 'more' : 'less';
  console.log(`The sceret number is\x1b[33m ${moreOrLess} than\x1b[0m your guess !!!${symbol}`);
  console.log(`You have\x1b[31m ${remainingChances - 1}\x1b[0m chances left !!!\n\n`);
}

function guessNumber(secretNumber, remainingChances = 5) {
  const pick = prompt("Enter number : ");
  const result = checkGuess(pick, secretNumber + "");
  if (result[0] === (secretNumber + "").length) {
    console.log("Yayyy!! You Won");
    return 1;
  }
  console.log("Guns =>", result[0]);
  console.log("Roses =>", result[1]);
  return guessNumber(secretNumber);
}

function thinkOfANumber(startRange, endRange) {
  const endingLimit = endRange - startRange + 1;
  const number = Math.floor(Math.random() * endingLimit) + startRange;
  return number;
}

function heading(text) {
  const underline = '_'.repeat(text.length);
  console.log(`${text}\n${underline}`);
}

// function selectRange(mode, difficulty){
//   const range = [];
//   const end = difficulty === 6 ? 5 : difficulty;
//   let startRange = 1;
//   let endRange = 200 * end;
//   console.clear();
//   if (mode === 2) {
//     startRange = parseInt(prompt("What is the start range ? "));
//     endRange = parseInt(prompt("What is the end range ? "));
//   }
//   console.log("The secrect number is between", startRange, "and", endRange);
//   range.push(startRange);
//   range.push(endRange);
//   return range;
// }

function playAgain(result) {
  console.log();
  const challenge = result === 1 ? "Do you wanna continue your winning streak ?😎" :
                            "No problem! I think you can win this time🤩\nAre you ready😉";
  const response = confirm(challenge);
  if (response) play();
}

function play() {
  console.clear();
  // const mode = selectMode();
  // let difficulty = 0;
  // if (mode === 1) {
  //   difficulty = selectDifficulty();
  // }
  // const range = selectRange(mode, difficulty);
  const secretNumber = thinkOfANumber(1000, 9999);
  // const chances = selectChances(mode, difficulty);
  const result = guessNumber(secretNumber);
  playAgain(result);
}

function main() {
  play();
  console.log("\n\nHave a nice day😊🤍");
}

main();
