function isLetterVowel(letter) {
  const isAei = letter === "a" || letter === "e" || letter === "i";
  return isAei || letter === "o" || letter === "u";
}

function isAlternate(isVowel, isConsonant){
  let isAlt = !isVowel && !isConsonant;
  isAlt = isAlt || (isVowel && isConsonant);
  return isAlt;
}

function splitAWord(word) {
  let remainingString = "";
  let newWord = word[0];
  let isVowel = isVowel(newWord);
  const lengthOfWord = word.length;

  for (let index = 1; index < lengthOfWord; index++) {
    const isConsonant = !isVowel(word[index]);
    const isAlt = isAlternate(isVowel, isConsonant);

    if (isAlt) {
      newWord += word[index];
      isVowel = !isConsonant;
    } else {
      remainingString += word[index] + ",";
    }
  }
  
  console.log(newWord + "," + remainingString);
  return newWord;
}

function message(expectedValue, actualValue, symbol) {
  const expectedMessage = symbol + " Result has to be " + expectedValue;
  const actualMessage = " and was " + actualValue;
  const result = expectedMessage + actualMessage; 
  console.log(result);
}

function testSplitAWord(word, expectedValue) {
  const newWord = splitAWord(word);
  const symbol = newWord === expectedValue ? "✅" : "❌";
  message(expectedValue, newWord, symbol);
}

function testAll() {
  testSplitAWord("apple", "ape");
  testSplitAWord("there", "tere");
  testSplitAWord("hello", "helo");
  testSplitAWord("abyss", "ab");
  testSplitAWord("this", "tis");
  testSplitAWord("nikhil", "nikil");
  testSplitAWord("banana", "banana");
  testSplitAWord("thought", "tog");
}

testAll();
