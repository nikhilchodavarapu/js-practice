function isVowel(letter) {
  const isAei = letter === "a" || letter === "e" || letter === "i";
  return isAei || letter === "o" || letter === "u";
}

function isAlternate(isLetterVowel, isConsonant) {
  let isAlt = !isLetterVowel && !isConsonant;
  isAlt = isAlt || (isLetterVowel && isConsonant);
  return isAlt;
}

function splitAWord(word) {
  let remainingString = "";
  let newWord = word[0];
  let isLetterVowel = isVowel(newWord);
  const lengthOfWord = word.length;

  for (let index = 1; index < lengthOfWord; index++) {
    const isConsonant = !isVowel(word[index]);
    const isAlt = isAlternate(isLetterVowel, isConsonant);

    if (isAlt) {
      newWord += word[index];
      isLetterVowel = !isConsonant;
    } else {
      remainingString += word[index] + ",";
    }
  }
  
  console.log(newWord + "," + remainingString);
}
