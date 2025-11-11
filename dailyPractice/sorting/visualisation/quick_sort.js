let MAX_LENGTH = 0;
const delay = function () {
  for (let i = 0; i < 2000000000; i++);
}

const pad = function (element) {
  return (element + "").padStart(2);
}

const toGraph = function (number) {
  const element = [];
  for (let i = 0; i < MAX_LENGTH - number; i++) {
    element.push("    ");
  }

  element.push('____');
  
  for (let i = 0; i < number - 1; i++) {
    element.push('|  |');
  }

  const paddedNumber = pad(number);
  element.push(`|${paddedNumber}|`)
  
  // console.log(element.join('\n'));
  return element;
}

const represent = function (data, x, a, b) {
  const elements = [];
  for (let i = 0; i < data.length; i++) {
    elements.push(toGraph(data[i]));
  }

  const representation = [];
  for (let i = 0; i < elements[0].length; i++) {
    let eachLine = "";
    for (let j = 0; j < elements.length; j++) {
      let color = j === x ? '\x1b[91m' : "";
      color = (j === a || j === b) ? '\x1b[93m' : color;
      eachLine += color +  elements[j][i] + "  " + "\x1b[0m";
    }
    representation.push(eachLine);
  }
  
  return representation.join('\n');
}

const swap = function (data, i, j) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

const putElementInPosition = function (data, lowBound, upBound) {
  const currentElement = data[lowBound];
  let start = lowBound + 1;
  let end = upBound;

  console.clear();
  console.log(represent(data, lowBound, start, upBound));
  delay();

  while (start <= end) {
    while (data[start] < currentElement && start <= end) {
      start++;
      console.clear();
      console.log(represent(data, lowBound, start, end));
      delay();
    }
    while (data[end] >= currentElement && start <= end) {
      end--;
      console.clear();
      console.log(represent(data, lowBound, start, end));
      delay();
    }
    if (start < end) {
      swap(data, start, end);
      console.clear();
      console.log(represent(data, lowBound, start, end));
      delay();
    }
  }
  swap(data, lowBound, end);
  console.clear();
  console.log(represent(data, lowBound, start, end));
  delay();

  console.log(data, currentElement)
  return end;
}

const seperate = function (data, lowBound, upBound) {
  if (lowBound < upBound) {
    const seperator = putElementInPosition(data, lowBound, upBound);
    seperate(data, lowBound, seperator - 1);
    seperate(data, seperator + 1, upBound);
  }
}

const quickSort = function (data) {
  seperate(data, 0, data.length - 1);
}

function main(args) {
  const data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(parseInt(args[i]));
  }
  MAX_LENGTH(...data);
  quickSort(data)
  console.log(data)
}

main(Deno.args);