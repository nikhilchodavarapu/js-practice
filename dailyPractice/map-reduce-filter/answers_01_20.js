// ### **1. Festival Ribbon Count**
// A craft booth cuts ribbons of different colors throughout the day:
// 
// ["red", "blue", "red", "green", "red", "blue"]
// 
// They want to know how many **blue** ribbons were cut.

const countRibbons = (count, currentElement) =>
  currentElement === 'blue' ? count + 1 : count;

const countSomething = (log, counter) => 
  log.flat().reduce(counter, 0)


// ### **2. Stargazing Log**
// A stargazing club logs visible constellations from each night:
// ["Orion", "Leo"]
// ["Taurus"]
// ["Orion", "Gemini"]
// Combine everyone’s observations into one list of all constellations spotted.

const removeDuplicates = (uniqueElements, currentElement) => {
  uniqueElements.includes(currentElement) ? "" : uniqueElements.push(currentElement);
  return uniqueElements;
}

const findUniques = (array) =>
  array.flat().reduce(removeDuplicates, []);


// ### **3. Birdwatching Duplicate Removal**
// A birdwatcher notes species seen during a morning walk:
// 
// ["sparrow", "crow", "sparrow", "eagle", "crow"]
// 
// Create a list of the species without repeats, preserving the order first seen.


// ### **4. Classroom Attendance Check**
// A class records names of students present for each period:
// ["Asha", "Ravi", "Neel"]
// ["Ravi"]
// ["Asha", "Meera"]
// Determine which distinct students attended at least once.


// ### **5. Candy Jar Stocking**
// A store logs candy refills like this:
// [5, 3]
// [2]
// [4, 1]
// Find the total number of candies added.

const add = (sum, currentElement) => sum + currentElement;

const sumOfElements = (array) => array.flat().reduce(add);


// ### **6. Music Rehearsal Notes**
// Choir groups practice with sequences:
// ["mi", "fa", "so"]
// ["do", "mi"]
// ["fa"]
// Check whether **any** group sang `"do"`.

const sangDo = (currentSequence) => currentSequence.includes('do');

const anyThingMatched = (array, predicate) =>
  array.flat().some(predicate);


// ### **7. Weather Sensor Validation**
// Several temperature sheets:
// [22, 23]
// [25, 24, 22]
// [29]
// Check if **every** recorded temperature is below 32.

const below32 = (temperature) => temperature < 32;

const everythingMatched = (array, predicate) =>
  array.flat().every(predicate);


// ### **8. Fitness Tracker Miles**
// Runner logs:
// [2, 3, 2]
// [4]
// [1, 1]
// Find the total miles run.


// ### **9. Art Workshop Color Variety**
// Paint colors used in sessions:
// ["blue", "yellow"]
// ["yellow", "green"]
// ["blue"]
// Find unique colors used.

// ### **10. Library Return Counter**
// Books returned:
// ["Dune", "Dune", "Foundation", "Dune"]
// Count how many times “Dune” was returned.

const countDuneReturns = (count, currentElement) =>
  currentElement === 'Dune' ? count + 1 : count;

//__________________________________________________________________________________________________________________

// ### **11. Lunchbox Ingredient Inventory**
// Lists of ingredients:
// ["rice", "lentils"]
// ["rice"]
// ["curd", "lentils"]
// Produce a list of distinct ingredients.



// ### **12. Choir Harmony Review**
// Singers produce sequences:
// ["la", "la"]
// ["mi"]
// ["so", "la"]
// Check whether any group sang `"so"`.

const sangSo = (currentSequence) => currentSequence.includes('so');


// ### **13. Vegetable Crate Totals**
// Crate weights:
// [4, 6]
// [2, 3, 1]
// [5]
// Find the sum of all weights.


// ### **14. Post Office Parcel Record**
// Parcel sizes logged:
// ["small", "large", "medium", "small"]
// Find unique parcel sizes.


// ### **15. Wildlife Sighting Count**
// Animal sightings:
// ["deer", "deer", "rabbit", "deer"]
// Count how many times “deer” was seen.

const countDeer = (count, currentElement) =>
  currentElement === "deer" ? count + 1 : count;


// ### **16. Study Group Completion**
// Study groups finish chapters:
// [1, 2]
// [3]
// [2, 4, 1]
// Find all chapters completed by any group.


// ### **17. Dance Class Steps**
// Step sequences:
// ["step", "tap"]
// ["turn", "step"]
// Check if `"turn"` appears in any sequence.

const turnAppears = (currentElement) => currentElement === 'turn';


// ### **18. Garden Watering Amount**
// Water used:
// [1, 2, 1]
// [3]
// [2]
// Total amount of water used.


// ### **19. Paper Crane Making**
// Origami students make cranes in sessions:
// [3, 2]
// [1]
// [4]
// Compute the total cranes.


// ### **20. Fruit Basket Inventory**
// Mixed fruits recorded:
// ["apple", "banana"]
// ["apple"]
// ["apple", "orange"]
// List unique fruits used.


const fisrt10FunctionCalls = () => {
console.log(countSomething(["red", "blue", "red", "green", "red", "blue"], countRibbons)); // festival Ribbon Count.

console.log(findUniques(["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"])); // Combine Obesrvations

console.log(findUniques(["sparrow", "crow", "sparrow", "eagle", "crow"])); 

console.log(findUniques([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]])); // ClassRoom Attendance Check

console.log(sumOfElements([[5, 3], [2], [4, 1]])); // Candy Jar Stocking

console.log(anyThingMatched([["mi", "fa", "so"], ["do", "mi"], ["fa"]], sangDo));

console.log(everythingMatched([[22, 23], [25, 31, 22], [29]], below32));

console.log(sumOfElements([[2, 3, 2], [4], [1, 1]]));

console.log(findUniques([["blue", "yellow"], ["yellow", "green"], ["blue"]]))

console.log(countSomething(["Dune", "Dune", "Foundation", "Dune"], countDuneReturns));
}

const second10FunctionCalls = () => {
console.log(findUniques([["rice", "lentils"], ["rice"], ["curd", "lentils"]]));

console.log(anyThingMatched([["la", "la"], ["mi"], ["so", "la"]], sangSo));

console.log(sumOfElements([[4, 6], [2, 3, 1], [5]]))

console.log(findUniques(["small", "large", "medium", "small"]));

console.log(countSomething(["deer", "deer", "rabbit", "deer"], countDeer));

console.log(findUniques([[1, 2], [3], [2, 4, 1]]));

console.log(anyThingMatched([["step", "tap"], ["turn", "step"]], turnAppears));

console.log(sumOfElements([[1, 2, 1], [3], [2]]));

console.log(sumOfElements([[3, 2], [1], [4]]));

console.log(findUniques([["apple", "banana"], ["apple"], ["apple", "orange"]]));

}

const main = () => {
  fisrt10FunctionCalls();
  second10FunctionCalls();
}

main();