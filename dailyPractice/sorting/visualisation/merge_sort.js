let MAX_LENGTH = 0;
const delay = function () {
  for (let i = 0; i < 2000000000; i++);
};

const pad = function (element) {
  return (element + "").padStart(2);
};

const toGraph = function (number) {
  const element = [];
  for (let i = 0; i < MAX - number; i++) {
    element.push("    ");
  }

  element.push("____");

  for (let i = 0; i < number - 1; i++) {
    element.push("|  |");
  }

  const paddedNumber = pad(number);
  element.push(`|${paddedNumber}|`);

  // console.log(element.join('\n'));
  return element;
};

const represent = function (data, a, b, x) {
  const elements = [];
  for (let i = 0; i < data.length; i++) {
    elements.push(toGraph(data[i]));
  }

  const representation = [];
  for (let i = 0; i < elements[0].length; i++) {
    let eachLine = "";
    for (let j = 0; j < elements.length; j++) {
      let color = j === x ? '\x1b[91m' : "";
      color = (j === a || j === b) ? "\x1b[93m" : color;
      eachLine += color + elements[j][i] + "  " + "\x1b[0m";
    }
    representation.push(eachLine);
  }

  return representation.join("\n");
};

const merge = (data, lowBound, upBound, middleIndex) => {
  const sortedData = [];
  let i = lowBound;
  let j = middleIndex + 1;
  console.clear();
  console.log(represent(data, lowBound, upBound, middleIndex));
  delay();
  while (i <= middleIndex && j <= upBound) {
    if (data[i] < data[j]) {
      sortedData.push(data[i]);
      i++;
    } else {
      sortedData.push(data[j]);
      j++;
    }
    // console.clear();
    console.clear();
    console.log(represent(data, i, j, middleIndex));
    console.log(represent(sortedData, i, j, -1));
    delay();
  }

  while (i <= middleIndex) {
    sortedData.push(data[i]);
    i++;
    // console.clear();
    console.clear();
    console.log(represent(data, i, j, middleIndex));
    console.log(represent(sortedData, i, j, -1));
    delay();
  }

  while (j <= upBound) {
    sortedData.push(data[j]);
    j++;
    // console.clear();
    console.clear();
    console.log(represent(data, i, j, middleIndex));
    console.log(represent(sortedData, i, j, -1));
    delay();
  }

  let k = lowBound;
  for (let i = 0; i < sortedData.length; i++) {
    data[k] = sortedData[i];
    k++;
  }
};

const seperate = (data, lowBound, upBound) => {
  if (lowBound < upBound) {
    const middleIndex = Math.floor((lowBound + upBound) / 2);
    seperate(data, lowBound, middleIndex);
    seperate(data, middleIndex + 1, upBound);
    merge(data, lowBound, upBound, middleIndex);
  }
};

export const mergeSort = function (data) {
  seperate(data, 0, data.length - 1);
};

function main(args) {
  const data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(parseInt(args[i]));
  }
  MAX_LENGTH = Math.max(...data);
  mergeSort(data);
  console.log(data);
}

main(Deno.args);
