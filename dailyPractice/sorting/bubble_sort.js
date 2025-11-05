let numberOfTimes = 0;

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

function main() {
  const data = [5, 4, 3, 2, 1];
  const sortedData = sort(data);
  console.log(data);
  console.log(sortedData);
  console.log(numberOfTimes);
}

main();
