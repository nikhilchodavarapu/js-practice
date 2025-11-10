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

// ### **21. Classroom Pen Distribution**
// Pens given:
// [2, 3]
// [1]
// [3, 2]
// Total pens handed out.

const classroomPenDistribution = () => {
  const givenPens = [[2, 3], [1], [3, 2]];
  const totalPens = sumOfElements(givenPens);
  console.log("Total Pens Handed Out =>", totalPens);
}

// ### **22. Movie Marathon Titles**
// Movies watched:
// ["Inception", "Dunkirk"]
// ["Interstellar"]
// ["Inception"]
// List unique titles watched.

const movieMarathonTitles = () => {
  const moviesWatched = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];
  const uniqueTitles = findUniques(moviesWatched);
  console.log("\nUnique Titles =>", uniqueTitles);
}

// ### **23. Name Badge Sorting**
// Students sign in repeatedly:
// ["A", "B", "A", "C", "B"]
// Create a unique list of attendees.


const nameBadgeSorting = () => {
  const attendees = ["A", "B", "A", "C", "B"];
  const uniqueAttendees = findUniques(attendees);
  console.log("\nUnique Attendees =>", uniqueAttendees);
}

// ### **24. Ice Cream Orders**
// Orders recorded:
// ["vanilla", "chocolate"]
// ["strawberry"]
// ["chocolate"]
// Find how many orders were `"chocolate"`.

const countChocolateOrders = (count, currentOrder) =>
  currentOrder === 'chocolate' ? count + 1 : count;

const iceCreamOrders = () => {
  const ordersRecorded = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]];
  const chocolateOrders = ordersRecorded.flat().reduce(countChocolateOrders, 0);
  console.log("\nCholocates orders =>", chocolateOrders);
}

// ### **25. Flowers in Bouquets**
// Bouquets contain:
// ["rose", "lily"]
// ["lily", "tulip"]
// List all unique flowers used.

const flowersInBouquets = () => {
  const bouquets = [['rose', 'lily'], ['lily', 'tulip']];
  const uniqueFlowers = findUniques(bouquets);
  console.log("\nUnique Flowers =>", uniqueFlowers);
}

// ### **26. Morning Exercise Count**
// Repetitions:
// [10, 20]
// [5]
// [15, 10]
// Total repetitions done.

const morningExerciseCount = () => {
  const repetitions = [[10, 20], [5], [15, 10]];
  const totalRepetitions = sumOfElements(repetitions);
  console.log("\nTotal Repetitions =>", totalRepetitions);
}

// ### **27. Train Station Announcements**
// Stations announced:
// ["A", "B"]
// ["B", "C"]
// ["A"]
// Find the station names without repeats.

const trainStationAnnouncements = () => {
  const stationsAnnounced = [['A', 'B'], ['B',  'C'], ['A']];
  const stationNames = findUniques(stationsAnnounced);
  console.log("\nStation Names Without Repeats =>", stationNames);
}

// ### **28. Book Club Pages Read**
// Groups read pages:
// [12, 10]
// [5]
// [8, 7]
// Find total pages read.

const bookClubPagesRead = () => {
  const pagesRead = [[12, 10], [5], [8, 7]];
  const totalPagesRead = sumOfElements(pagesRead);
  console.log("\nTotal Pages Read =>", totalPagesRead);
}

// ### **29. Rainfall Data Check**
// Measurements:
// [3, 4]
// [5, 2]
// [1]
// Check if all values are positive.

const isPositive = (measurement) => measurement > 0;

const rainfallDataCheck = () => {
  const measurements = [[3, 4], [5, 2], [1]];
  const areAllValuesPositive = measurements.flat().every(isPositive);
  const suffix = areAllValuesPositive ? "yes" : "no";
  console.log("\nAre all value positive :", suffix);
}

// ### **30. Fruit Stand Weight Totals**
// Weights:
// [4, 3]
// [2]
// [3, 1]
// Compute total weight.

const fruitStandWeightTotals = () => {
  const weights = [[4, 3], [2], [3, 1]];
  const totalWeight = sumOfElements(weights);
  console.log("\nTotal Weight =>", totalWeight);
}

// ### **31. School Snack List**
// Snacks:
// ["idli", "vada"]
// ["vada", "upma"]
// Unique snacks served.

const schoolSnackList = () => {
  const snacks = [["idli", "vada"], ["vada", "upma"]];
  const uniqueSnacksServed = findUniques(snacks);
  console.log("Unique Snacks Served =>", uniqueSnacksServed);
}

// ### **32. Photo Contest Entries**
// Photographers submit sets:
// ["sunset", "bird"]
// ["river"]
// ["sunset"]
// List unique themes.

const photoContestEntries = () => {
  const sets = [["sunset", "bird"], ["river"], ["sunset"]];
  const uniqueThemes = findUniques(sets);
  console.log("\nUnique Themes =>", uniqueThemes);
}

// ### **33. Electricity Reading Validation**
// Readings:
// [110, 115]
// [118]
// [109]
// Check if all readings are below 120.

const isBelow120 = (reading) => reading < 120;

const electricityReadingValidation = () => {
  const readings = [[110, 115], [118], [109]];
  const allReadingsBelow120 = readings.flat().every(isBelow120);
  const suffix = allReadingsBelow120 ? 'Yes' : 'No';
  console.log("All readings below 120 :", suffix);
}

// ### **34. Jogging Lap Count**
// Laps:
// [2, 3, 2]
// [1]
// [4]
// Compute total laps.

const joggingLapCount = () => {
  const laps = [[2, 3, 2], [1], [4]];
  const totalLaps = sumOfElements(laps);
  console.log("Total Laps =>", totalLaps);
}

// ### **35. Music Playlist Repeats**
// Songs played:
// ["track1", "track2", "track1"]
// Count occurrences of `"track1"`.

const countOccurences = (count, currentSong) =>
  currentSong === 'track1' ? count + 1 : count;

const musicPlaylistRepeats = () => {
  const songsPlayed = ["track1", "track2", "track1"];
  const track1Occurences = songsPlayed.reduce(countOccurences, 0);
  console.log("Track 1 occured", track1Occurences, "times");
}

// ### **36. Café Order Ingredients**
// Ingredients:
// ["cheese", "bread"]
// ["tomato"]
// ["bread"]
// Unique ingredients needed.

const cafeOrderIngredients = () => {
  const ingredients = [["cheese", "bread"], ["tomato"], ["bread"]];
  const uniqueIngredients = findUniques(ingredients);
  console.log("Unique Ingredients =>", uniqueIngredients);
}

// ### **37. Student Poetry Words**
// Word lists:
// ["sky", "blue"]
// ["night"]
// ["sky", "dark"]
// List all unique words.

const studentPoetryWords = () => {
  const wordLists = [["sky", "blue"], ["night"], ["sky", "dark"]];
  const uniqueWords = findUniques(wordLists);
  console.log("Unique Words =>", uniqueWords);
}

// ### **38. Gift Box Items**
// Items:
// ["toy", "sticker"]
// ["candy", "sticker"]
// List unique items used.

const giftBoxItems = () => {
  const items = [["toy", "sticker"], ["candy", "sticker"]];
  const uniqueItems = findUniques(items);
  console.log("Unique Items =>", uniqueItems);
}

// ### **39. Gym Routine Count**
// Routine counts:
// [6, 4]
// [3, 2]
// Total counts.

const gymRountineCount = () => {
  const routineCounts = [[6, 4], [3, 2]];
  const totalCount = sumOfElements(routineCounts);
  console.log("Total Counts =>", totalCount);
}

// ### **40. Fish Tank Measurements**
// Measurements:
// [5, 6]
// [7]
// [6]
// Check if any measurement is above 7.

const isAbove7 = (currentMeasurement) => currentMeasurement > 7;

const fishTankMeasurements = () => {
  const measurements = [[5, 6], [7], [6]];
  const anyMeasurementAbove7 = measurements.flat().some(isAbove7);
  const suffix = anyMeasurementAbove7 ? "yes" : "no";
  console.log("Any measurement above 7 :", suffix);
}

const second10FunctionCalls = () => {
  schoolSnackList();
  photoContestEntries();
  electricityReadingValidation();
  joggingLapCount();
  musicPlaylistRepeats();
  cafeOrderIngredients();
  studentPoetryWords();
  giftBoxItems();
  gymRountineCount();
  fishTankMeasurements();
}

const fisrt10FunctionCalls = () => {
  classroomPenDistribution();
  movieMarathonTitles();
  nameBadgeSorting();
  iceCreamOrders();
  flowersInBouquets();
  morningExerciseCount();
  trainStationAnnouncements();
  bookClubPagesRead();
  rainfallDataCheck();
  fruitStandWeightTotals();
}

const main = () => {
  // fisrt10FunctionCalls();
  second10FunctionCalls();
}

main()
/*




*/