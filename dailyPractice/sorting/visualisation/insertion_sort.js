const delay = function () {
  for (let i = 0; i < 2000000000; i++);
}

const pad = function (element) {
  return (element + "").padStart(2);
}

const toGraph = function (number) {
  let element = [];
  for (let i = 0; i < 65 - number - 1; i++) {
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

const sort = function (data, compare) {
  const sortedData = [data[0]];
  const unSortedData = data.slice(1, data.length);
  let visualData = data.slice();
  console.clear();
  console.log(represent(visualData, 0, 1));
  delay();
  while (unSortedData.length > 0) {
    sortedData.push(unSortedData.shift());
    let j = sortedData.length - 1;
    let islessThan = true;
    while (j >= 1 && islessThan) {
      console.clear();
      visualData = sortedData.concat(unSortedData);
      console.log(represent(visualData, j - 1, j));
      delay();
      if (compare(sortedData[j - 1], sortedData[j])) {
        const temp = sortedData[j];
        sortedData[j] = sortedData[j - 1];
        sortedData[j - 1] = temp;
        islessThan = true;
        console.clear();
        visualData = sortedData.concat(unSortedData);
        console.log(represent(visualData, j - 1, j));
        delay();
      } else islessThan = false;
      j--;
    }
  }

  return sortedData;
};

function main(args) {
  const data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(parseInt(args[i]));
  }
  sort(data, greaterThan);
}

main(Deno.args);