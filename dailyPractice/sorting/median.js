function medianOf(data) {
  const sortedData = sort(data);
  const middleIndex = Math.floor(data.length / 2);
  return sortedData[middleIndex];
}

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
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
  const median = medianOf(data)
  console.log(data);
  console.log(median);
}

main();