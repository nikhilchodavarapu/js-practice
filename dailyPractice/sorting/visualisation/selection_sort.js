const delay = function () {
  for (let i = 0; i < 2000000000; i++);
}

const toGraph = function (number) {
  let element = [];
  for (let i = 0; i < 65 - number - 1; i++) {
    element.push("    ");
  }

  element.push('____');
  
  for (let i = 0; i < number; i++) {
    element.push('|  |');
  }
  
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
  const sortedData = data.slice();
  console.clear();
  console.log(represent(sortedData, 0, 1));
  delay();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      console.clear();
      console.log(represent(sortedData, i, j));
      delay();
      if (compare(sortedData[i], sortedData[j])) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
        console.clear();
        console.log(represent(sortedData, i, j));
        delay();
      }
    }
  }

  return sortedData;
};

function main(data) {
  console.log(sort(data, greaterThan));
}

main(Deno.args);