// fonts.js - Generate ASCII art text with two different font styles
// Usage: deno run fonts.js [text] [font]
// Available fonts: "block" and "simple"

// Define the fonts
export function getBlockFont() {
  return {
    A: [
      "  ###  ",
      " ## ## ",
      "##   ##",
      "#######",
      "##   ##",
      "##   ##",
      "##   ##",
    ],
    B: [
      "###### ",
      "##   ##",
      "##   ##",
      "###### ",
      "##   ##",
      "##   ##",
      "###### ",
    ],
    C: [
      " ##### ",
      "##   ##",
      "##     ",
      "##     ",
      "##     ",
      "##   ##",
      " ##### ",
    ],
    D: [
      "###### ",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "###### ",
    ],
    E: [
      "#######",
      "##     ",
      "##     ",
      "#####  ",
      "##     ",
      "##     ",
      "#######",
    ],
    F: [
      "#######",
      "##     ",
      "##     ",
      "#####  ",
      "##     ",
      "##     ",
      "##     ",
    ],
    G: [
      " ##### ",
      "##   ##",
      "##     ",
      "##  ###",
      "##   ##",
      "##   ##",
      " ##### ",
    ],
    H: [
      "##   ##",
      "##   ##",
      "##   ##",
      "#######",
      "##   ##",
      "##   ##",
      "##   ##",
    ],
    I: [
      "#######",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "#######",
    ],
    J: [
      "#######",
      "    ## ",
      "    ## ",
      "    ## ",
      "##  ## ",
      "##  ## ",
      " ####  ",
    ],
    K: [
      "##   ##",
      "##  ## ",
      "## ##  ",
      "####   ",
      "## ##  ",
      "##  ## ",
      "##   ##",
    ],
    L: [
      "##     ",
      "##     ",
      "##     ",
      "##     ",
      "##     ",
      "##     ",
      "#######",
    ],
    M: [
      "###   ###",
      "#### ####",
      "## ### ##",
      "##  #  ##",
      "##     ##",
      "##     ##",
      "##     ##",
    ],
    N: [
      "##   ##",
      "###  ##",
      "#### ##",
      "## ####",
      "##  ###",
      "##   ##",
      "##   ##",
    ],
    O: [
      " ##### ",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      " ##### ",
    ],
    P: [
      "###### ",
      "##   ##",
      "##   ##",
      "###### ",
      "##     ",
      "##     ",
      "##     ",
    ],
    Q: [
      " ##### ",
      "##   ##",
      "##   ##",
      "##   ##",
      "## # ##",
      "##  ## ",
      " #### #",
    ],
    R: [
      "###### ",
      "##   ##",
      "##   ##",
      "###### ",
      "## ##  ",
      "##  ## ",
      "##   ##",
    ],
    S: [
      " ##### ",
      "##   ##",
      "##     ",
      " ##### ",
      "     ##",
      "##   ##",
      " ##### ",
    ],
    T: [
      "#######",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
    ],
    U: [
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      " ##### ",
    ],
    V: [
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      "##   ##",
      " ## ## ",
      "  ###  ",
    ],
    W: [
      "##     ##",
      "##     ##",
      "##     ##",
      "##  #  ##",
      "## ### ##",
      "#### ####",
      "###   ###",
    ],
    X: [
      "##   ##",
      "##   ##",
      " ## ## ",
      "  ###  ",
      " ## ## ",
      "##   ##",
      "##   ##",
    ],
    Y: [
      "##   ##",
      "##   ##",
      " ## ## ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
    ],
    Z: [
      "#######",
      "     ##",
      "    ## ",
      "  ##   ",
      " ##    ",
      "##     ",
      "#######",
    ],
    " ": [
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
    ],
    "!": [
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "       ",
      "  ###  ",
    ],
    ".": [
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
      "  ###  ",
    ],
    ",": [
      "       ",
      "       ",
      "       ",
      "       ",
      "       ",
      "  ###  ",
      " ###   ",
    ],
    "?": [
      " ##### ",
      "##   ##",
      "     ##",
      "   ### ",
      "  ###  ",
      "       ",
      "  ###  ",
    ],
    0: [
      " ##### ",
      "##   ##",
      "##  ###",
      "## # ##",
      "###  ##",
      "##   ##",
      " ##### ",
    ],
    1: [
      "  ###  ",
      " ####  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      "#######",
    ],
    2: [
      " ##### ",
      "##   ##",
      "     ##",
      "   ### ",
      " ###   ",
      "##     ",
      "#######",
    ],
    3: [
      " ##### ",
      "##   ##",
      "     ##",
      "  #### ",
      "     ##",
      "##   ##",
      " ##### ",
    ],
    4: [
      "   ### ",
      "  #### ",
      " ## ## ",
      "##  ## ",
      "#######",
      "    ## ",
      "    ## ",
    ],
    5: [
      "#######",
      "##     ",
      "###### ",
      "     ##",
      "     ##",
      "##   ##",
      " ##### ",
    ],
    6: [
      " ##### ",
      "##   ##",
      "##     ",
      "###### ",
      "##   ##",
      "##   ##",
      " ##### ",
    ],
    7: [
      "#######",
      "     ##",
      "    ## ",
      "   ##  ",
      "  ##   ",
      " ##    ",
      "##     ",
    ],
    8: [
      " ##### ",
      "##   ##",
      "##   ##",
      " ##### ",
      "##   ##",
      "##   ##",
      " ##### ",
    ],
    9: [
      " ##### ",
      "##   ##",
      "##   ##",
      " ######",
      "     ##",
      "##   ##",
      " ##### ",
    ],
  };
}

function getSimpleFont() {
  return {
    A: [" /\\ ", "/--\\", "|  |"],
    B: ["|-\\ ", "|-< ", "|_/ "],
    C: [" /--", "|   ", " \\__"],
    D: ["|--\\", "|  |", "|__/"],
    E: ["|---", "|-- ", "|___"],
    F: ["|---", "|-- ", "|   "],
    G: [" /--", "| _|", " \\__"],
    H: ["|  |", "|--|", "|  |"],
    I: ["---", " | ", "___"],
    J: ["   |", "   |", "\\__/"],
    K: ["| /", "|< ", "| \\"],
    L: ["|   ", "|   ", "|___"],
    M: ["|\\  /|", "| \\/ |", "|    |"],
    N: ["|\\  |", "| \\ |", "|  \\|"],
    O: [" /--\\", "|    |", " \\__/ "],
    P: ["|--\\", "|__/", "|   "],
    Q: [" /--\\", "|    |", " \\_\\_/"],
    R: ["|--\\", "|__/", "|  \\"],
    S: [" /--", " \\_ ", "___/"],
    T: ["---", " | ", " | "],
    U: ["|  |", "|  |", " \\__/"],
    V: ["\\    /", " \\  / ", "  \\/  "],
    W: ["|     |", "|  ^  |", " \\/ \\/ "],
    X: ["\\ /", " X ", "/ \\"],
    Y: ["\\ /", " Y ", " | "],
    Z: ["---/", " /- ", "/___"],
    " ": ["   ", "   ", "   "],
    "!": [" | ", " | ", " o "],
    ".": ["   ", "   ", " o "],
    ",": ["   ", "   ", " , "],
    "?": [" ? ", "   ", " o "],
    0: [" /--\\", "|    |", " \\__/ "],
    1: [" /|", "  |", " _|_"],
    2: [" /--\\", "  /- ", " /___"],
    3: ["---\\", " --<", "___/"],
    4: ["|  |", "|__|", "   |"],
    5: ["|---", " --\\", "___/"],
    6: [" /--", "|-- ", " \\__"],
    7: ["---/", "  / ", " /  "],
    8: [" /--\\", " >--<", " \\__/"],
    9: [" /--\\", " \\__|", "    |"],
  };
}

// Function to convert text to ASCII art
function textToAsciiArt(text, font) {
  const characters = font;
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
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();

    // If character exists in our font
    if (characters[char]) {
      const charLines = characters[char];

      // Add each line of the character to the result
      for (let line = 0; line < height; line++) {
        if (line < charLines.length) {
          result[line] += charLines[line];
        } else {
          // Pad with spaces if the character doesn't have enough lines
          const firstLine = charLines[0];
          result[line] += " ".repeat(firstLine.length);
        }
      }
    } else {
      // For unsupported characters, add spaces
      for (let line = 0; line < height; line++) {
        result[line] += "   ";
      }
    }
  }

  return result;
}

// Main function to process command line arguments and generate ASCII art
export function main() {
  // Default values
  let text = "Hello!";
  let fontName = "block";

  // Process command line arguments
  const args = Deno.args;

  if (args.length >= 1) {
    text = args[0];
  }

  if (args.length >= 2) {
    fontName = args[1].toLowerCase();
  }

  // Select the appropriate font
  let selectedFont;
  if (fontName === "simple") {
    selectedFont = getSimpleFont();
  } else {
    // Default to block font
    selectedFont = getBlockFont();
  }

  // Generate and display ASCII art
  const asciiArt = textToAsciiArt(text, selectedFont);

  console.log("\nASCII Art Generator");
  console.log("=================");
  console.log(`Text: ${text}`);
  console.log(`Font: ${fontName}`);
  console.log("\nResult:");
  console.log("-----------------");

  for (let i = 0; i < asciiArt.length; i++) {
    console.log(asciiArt[i]);
  }

  console.log("-----------------");
  console.log('Available fonts: "block" and "simple"');
  console.log("Usage: deno run fonts.js [text] [font]");
}

// Run the main function
// main();
