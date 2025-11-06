const delay = function () {
  for (let i = 0; i < 3000000000; i++);
}

const toGraph = function (number) {
  let element = [];
  for (let i = 0; i < 50 - number - 1; i++) {
    element.push("    ");
  }

  element.push('____')
  
  for (let i = 0; i < number; i++) {
    element.push('|  |');
  }
  
  // console.log(element.join('\n'));
  return element;
}

const represent = function (data) {
  const elements = [];
  for (let i = 0; i < data.length; i++) {
    elements.push(toGraph(data[i]));
  }

  const representation = [];
  for (let i = 0; i < elements[0].length; i++) {
    let eachLine = "";
    for (let j = 0; j < elements.length; j++) {
      eachLine += elements[j][i] + "  ";
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
  console.log(represent(sortedData));
  delay();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (compare(sortedData[i], sortedData[j])) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
        console.clear();
        console.log(represent(sortedData));
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
