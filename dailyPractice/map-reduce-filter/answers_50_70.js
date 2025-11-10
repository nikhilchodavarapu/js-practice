
// 51. Count how many times “banana” appears in a fruit log.
const countBananas = (count, currentElement) =>
  currentElement === 'banana' ? count + 1 : count;

const countSomething = (log, counter) => 
  log.flat(2).reduce(counter, 0)

// 52. Combine all words written by students on three worksheets.
// Sum of all elements in array.
const add = (sum, currentElement) => sum + currentElement;

const sumOfElements = (array) => array.flat().reduce(add);

// 53. Determine whether any student wrote the word “excellent”.

const isExcellent = (currentElement) => currentElement = 'excellent';

const anyThingMatched = (array, predicate) =>
  array.flat().some(predicate);

// 54. Check whether all recorded rainfall values are under 50.
const below50 = (rainfallValue) => rainfallValue < 50;

const everythingMatched = (array, predicate) =>
  array.flat().every(predicate);

// 55. Produce a list of unique movie genres mentioned by a club.
const removeDuplicates = (uniqueElements, currentElement) => {
  uniqueElements.includes(currentElement) ? "" : uniqueElements.push(currentElement);
  return uniqueElements;
}

const findUniques = (array) =>
  array.flat().reduce(removeDuplicates, []);

// 56. Compute the total number of pushups done in all sessions.
// 57. Create a list of all unique bird species spotted on a trip.
// 58. Count how many tiles in a mosaic were listed as “red”.

const countRed = (count, currentElement) => 
  currentElement === 'red' ? count + 1 : count;

// 59. Sum all distances covered during cycling practice.
// 60. List unique flavors tried in an ice-cream tasting event.

const firstTen = () => {
  console.log(countSomething([['apple', 'banana'], [['banana'], 'banana']], countBananas)); // Count Bananas
  console.log(sumOfElements(['Hello', ' World'], ['Welcome'], ['To Javascript'])); // Combine All Words
  console.log(anyThingMatched([['hello', 'world'], ['excellent'], ['Namaste']], isExcellent)); // Any student Wrote excellent;
  console.log(everythingMatched([10, 20, 30, 40], below50)); // Rainfall values under 50.
  console.log(findUniques([['Action', 'Horror'], ['Drama', 'Action'], ['Horror']])); //Movie Geners
  console.log(sumOfElements([[15, 10], [25, 15], [30]])); // Total number Of Pushups
  console.log(findUniques([['Sparrow', 'Eagle'], ['Eagle', 'Woodpecker'],['Eagle']])); // Unique bird species
  console.log(countSomething([['blue', 'green'], ['red'], ['red', 'yellow']], countRed)); // Red tiles
  console.log(sumOfElements([[20, 15], [20, 30], [10]])); // Sum of distances
  console.log(findUniques([['Vanila', 'Butterskotch'], ['Mango', 'Vanila'], ['Butterskotch']])) // Unique Flavors
}

// 61. Check if any participant scored above 90 in tests.
const isAbove90 = (currentElement) => currentElement > 90;

// 62. Verify if all ages listed for an event are 18 or above.
const isAbove17 = (currentElement) => currentElement > 17;

// 63. Combine the ingredients from all recipe attempts.
// 64. Reverse the order of dance steps recorded by a choreographer.

const reverse = (element, index, array) => 
  array(array.length - index - 1);

// 65. Build a frequency summary of words used in a poem draft.

const secondTen = () => {
  console.log(anyThingMatched([[80, 78], [69, 54], [98, 87]], 'isAbove90')); // Any partiicpant scored above 90
  console.log(everythingMatched([19, 18, 20, 16, 30, 25, 21], isAbove17)); // All ages are 18 or above
  console.log(findUniques([["rice", "lentils"], ["rice"], ["curd", "lentils"]])); // Combine Ingredients
  console.log(['step1', 'step1', 'step2', 'step3'].map(reverse)); //Reverse The order of steps
}

// 66. Determine whether the note “fa” appears in any music sheet.
// 67. Sum all weights of parcels recorded in a courier office.
// 68. List distinct toppings chosen by pizza customers.
// 69. Count how many times a student reread a particular chapter.
// 70. Combine all color swatches from three design sets.

const main = () => {
  firstTen();
  secondTen();
}



main()