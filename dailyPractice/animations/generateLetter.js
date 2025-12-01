import { cyan, red, yellow } from "./colors.js";
import { getBlockFont } from "./fonts.js";

function textToAsciiArt(text) {
  const characters = getBlockFont();
  // Get the height of the characters in the font
  let height = 0;

  if (Object.keys(characters).length > 0) {
    const firstChar = Object.keys(characters)[0];
    height = characters[firstChar].length;
  }

  // Initialize result array with empty strings for each line
  const result = [];
  for (let i = 0; i < height; i++) {
    result.push("");
  }

  // Convert each character of text to ASCII art
  let i = 0;
  let line = 0;
  const interavalId = setInterval(() => {
    const char = text[i].toUpperCase();
    if (characters[char]) {
      const charLines = characters[char];
      if (line < charLines.length) {
        result[line] += charLines[line];
      } else {
        // Pad with spaces if the character doesn't have enough lines
        const firstLine = charLines[0];
        result[line] += " ".repeat(firstLine.length);
      }
    } else {
      while (line < height) {
        result[line] += "   ";
        line++;
      }
      line--;
    }
    line++;
    if (line === height) {
      line = 0;
      i++;
    }
    console.clear();
    for (let index = 0; index < result.length; index++) {
      console.log(result[index]);
    }
    if (i === text.length) {
      console.clear();
      const valueToDisplay = result.join("\n");
      console.log(yellow(valueToDisplay));
      clearInterval(interavalId);
    }
  }, 50);
}

const main = () => {
  const text = Deno.args[0] || "WELCOME !";
  const textWithALittleSpace = text.split("").join("^");
  textToAsciiArt(textWithALittleSpace);
};

main();

