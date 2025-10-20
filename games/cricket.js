function delay() {
  for (let i = 0; i < 1000000000; i++);
}

const one = 
`
      _
     // 
   /  /
  /  /
 /__/`

const two = 
`
  _
  ||
 |  |
 |  |
 |__|`

 const three = 
`
  _
  \\\\
  \\  \\
   \\  \\
    \\__\\`

const BAT = [one, two, three];
const BALL = '⚪';
const spaces = [3, 7, 10, 14, 18, 22, 25, 29, 32, 34, 36, 38, 41, 43];
const line = [1, 1, 2, 4, 5, 7, 8, 10, 11, 10, 9, 8, 7, 6];

function play() {
  for (let i = 13; i >= 0; i--) {
    console.clear();
    const newLine = '\n'.repeat(line[i])
    const space = '  '.repeat(spaces[i])
    console.log(BAT[i % 3] + newLine + space + BALL);
    delay();
  }
  for (let i = 0; i < 14; i++) {
    console.clear();
    const newLine = '\n'.repeat(line[i])
    const space = '  '.repeat(spaces[i])
    console.log(BAT[i % 3] + newLine + space + BALL);
    delay();
  }
}

play();
