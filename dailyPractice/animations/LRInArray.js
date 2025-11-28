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

const moveString = (string, screen, x, direction, speed = 50) => {
  const chars = string.split("");
  let col = 0;
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
    } else {
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
    }

    console.clear();
    displayScreen(screen);
  }, speed);
};

const main = () => {
  const screen = generateScreen(10, 60);
  moveString("Khasim", screen, 0, "L");
  moveString("Haji", screen, 5, "L", 100);
  moveString("Dilli", screen, 7, "R");
  moveString("Teja", screen, 3, "R", 70);
};

main();
