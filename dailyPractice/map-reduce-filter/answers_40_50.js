// Find Unique Elements.
const removeDuplicates = (uniqueElements, currentElement) => {
  uniqueElements.includes(currentElement) ? "" : uniqueElements.push(currentElement);
  return uniqueElements;
}

const findUniques = (array) =>
  array.flat().reduce(removeDuplicates, []);

// Sum of all elements in array.
const add = (sum, currentElement) => sum + currentElement;

const sumOfElements = (array) => array.flat().reduce(add);

// ### **41. Candy Distribution**
// Candy numbers:
// [1, 2, 3]
// [2]
// Sum all candies.

// ### **42. Workshop Attendance**
// Participants:
// ["Tom", "Jerry"]
// ["Jerry", "Spike"]
// List unique participants.

// ### **43. Space Camp Star Names**
// Stars named:
// ["Vega", "Sirius"]
// ["Vega", "Rigel"]
// Unique star names.

// ### **44. Train Car Passenger Check**
// Counts:
// [10, 12]
// [15]
// Total passengers.

// ### **45. Weekly Grocery Tally**
// Quantities:
// [3, 5]
// [2, 1]
// Find the total.

// ### **46. Tea Tasting Flavors**
// Flavors:
// ["mint", "ginger"]
// ["lemon"]
// ["mint"]
// Unique flavors.

// ### **47. Photography Exposure Values**
// Values:
// [2, 3]
// [1]
// [4, 2]
// Check if any value equals 4.

const checkAnyValue = (array, predicate) => 
  array.flat().some(predicate);

const anyValueEqualsTo4 = (currentElement) => currentElement === 4;

// ### **48. Drawing Class Tools**
// Tools:
// ["pencil", "charcoal"]
// ["ink"]
// ["pencil"]
// Unique tools used.

// ### **49. Coin Collection Tally**
// Coins collected:
// [1, 1, 2]
// [2, 1]
// Total coins.

// ### **50. Cooking Class Spices**
// Spices:
// ["salt", "pepper"]
// ["turmeric"]
// ["salt"]
// Unique spices.

const main = () => {
  console.log(sumOfElements([[1, 2, 3], [2]])); // Candy Distribution
  console.log(findUniques([["Tom", "Jerry"], ["Jerry", "Spike"]])); // Workshop Attendance
  console.log(findUniques([["Vega", "Sirius"], ["Vega", "Rigel"]])); // Space Camp Star Names
  console.log(sumOfElements([[10, 12], [15]])); // Train Car Passenger Check
  console.log(sumOfElements([[3, 5], [2, 1]])); // Weekly Grocery Tally
  console.log(findUniques([["mint", "ginger"], ["lemon"], ["mint"]])); // Tea Tasting Flavors
  console.log(checkAnyValue([[2, 3], [1], [4, 2]], anyValueEqualsTo4)); // Photography Exposure Values
  console.log(findUniques([["pencil", "charcoal"], ["ink"], ["pencil"]])); // Drawing Class Tools
  console.log(sumOfElements([[1, 1, 2], [2, 1]])); // Coin Collection Tally
  console.log(findUniques([["salt", "pepper"], ["turmeric"], ["salt"]])); // Cooking Class Spices
}

main();