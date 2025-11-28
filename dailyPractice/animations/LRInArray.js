const generateScreen = (rowSize, colSize) => {
  const screen = [];
  const cols = " ".repeat(colSize).split("");
  for (let i = 0; i < rowSize; i++) {
    screen[i] = [...cols];
  }
  return screen;
};

const displayScreen = (screen) => {
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const displayMirrorScreen = (screen) => {
  const screenWithMirror = [];
  screen.forEach((element) => {
    const wholeRow = element.join("");
    screenWithMirror.push(wholeRow + wholeRow.split("").reverse().join(""));
  });
  console.log(screenWithMirror.join("\n"));
};

const displayDoubleMirror = (screen) => {
  const screenWithMirror = [];
  screen.forEach((element) => {
    const wholeRow = element.join("");
    screenWithMirror.push(wholeRow + wholeRow.split("").reverse().join(""));
  });
  const doubleMirror = [...screenWithMirror];
  for (let i = screenWithMirror.length - 1; i >= 0; i--) {
    doubleMirror.push(screenWithMirror[i]);
  }
  console.log(doubleMirror.join("\n"));
};

const moveString = (string, screen, x, direction, speed = 50) => {
  const chars = string.split("");
  let col = 0;
  let row = 0;
  setInterval(() => {
    if (direction === "R") {
      for (let i = 0; i < col; i++) {
        screen[x][i] = " ";
      }
      for (let i = 0; i < chars.length; i++) {
        if (col < screen[x].length) {
          screen[x][col] = chars[i];
        }
        col++;
      }
      for (let i = col; i < screen[x].length; i++) {
        screen[x][i] = " ";
      }
      col = col - chars.length + 1;
      if (col >= screen[0].length) col = 0;
    } else if (direction === "L") {
      for (let i = col; i < screen[x].length; i++) {
        screen[x][i] = " ";
      }
      for (let i = chars.length - 1; i >= 0; i--) {
        if (col >= 0) {
          screen[x][col] = chars[i];
        }
        col--;
      }
      for (let i = 0; i < col; i++) {
        screen[x][i] = " ";
      }
      col = col + chars.length - 1;
      if (col < 0) col = screen[0].length - 1;
    } else {
      for (let i = 0; i < row; i++) {
        screen[i][x] = " ";
      }
      for (let i = 0; i < chars.length; i++) {
        if (row < screen.length) {
          screen[row][x] = chars[i];
        }
        row++;
      }
      for (let i = row; i < screen.length; i++) {
        screen[i][x] = " ";
      }
      row = row - chars.length + 1;
      if (row >= screen.length) row = 0;
    }

    console.clear();
    displayDoubleMirror(screen);
  }, speed);
};

const main = () => {
  const screen = generateScreen(11, 40);
  moveString("Khasim", screen, 0, "L");
  moveString("Haji", screen, 5, "L", 100);
  moveString("Dilli", screen, 7, "R");
  moveString("Teja", screen, 3, "R", 70);
  moveString("Ramu", screen, 3, "T", 150);
  moveString("Pawan", screen, 15, "T", 200);
};

main();
