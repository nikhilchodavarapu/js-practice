let MAX_LENGTH = 0;

const delay = function () {
  for (let i = 0; i < 2000000000; i++);
}

const pad = function (element) {
  return (element + "").padStart(2);
}

const toGraph = function (number) {
  let element = [];
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

const represent = function (data, a, b) {
  const elements = [];
  for (let i = 0; i < data.length; i++) {
    elements.push(toGraph(data[i]));
  }

  const representation = [];
  for (let i = 0; i < elements[0].length; i++) {
    let eachLine = "";
    for (let j = 0; j < elements.length; j++) {
      const color = (j === a || j === b) ? '\x1b[93m' : "";
      eachLine += color +  elements[j][i] + "  " + "\x1b[0m";
    }
    representation.push(eachLine);
  }
  
  return representation.join('\n');
}

const lessThan = function (a, b) {
  return a < b;
};

const greaterThan = function (a, b) {
  return a > b;
};

export const bubbleSort = function (data, compare = greaterThan) {
  const sortedData = data.slice();
  console.clear();
  console.log(represent(sortedData, 0, 1));
  delay();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      console.clear();
      console.log(represent(sortedData, j, j + 1));
      delay();
      if (compare(sortedData[j], sortedData[j + 1])) {
        const temp = sortedData[j + 1];
        sortedData[j + 1] = sortedData[j];
        sortedData[j] = temp;
        console.clear();
        console.log(represent(sortedData, j, j + 1));
        delay();
      }
    }
  }

  return sortedData;
};

function main(args) {
  const data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(parseInt(args[i]));
  }
  MAX_LENGTH = Math.max(...data);
  bubbleSort(data, greaterThan);
}

main(Deno.args);