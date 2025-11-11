const delay = function () {
  for (let i = 0; i < 2000000000; i++);
};

const pad = function (element) {
  return (element + "").padStart(2);
};

const toGraph = function (number) {
  const element = [];
  for (let i = 0; i < 30 - number - 1; i++) {
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

const findRuns = (data) => {
  const runs = [];
  let ascending = [];
  let descending = [];
  let index = 0;
  let a = data[index];
  let b = data[++index];
  while (index < data.length) {
    while (a <= b) {
      ascending.push(a);
      a = data[index];
      b = data[++index];
    }
    if (ascending.length !== 0) {
      ascending.push(a);
      runs.push(ascending);
      ascending = [];
      a = data[index];
      b = data[++index];
    }
    while (b <= a) {
      descending.push(a);
      a = data[index];
      b = data[++index];
    }
    if (descending.length !== 0) {
      descending.push(a);
      runs.push(descending.reverse());
      descending = [];
      a = data[index];
      b = data[++index];
    }
  }

  if (index === data.length) {
    runs.push([data[--index]]);
  }
  // if (ascending.length !== 0) runs.push(ascending);

  return runs;
};

const merge = (sortedData, run, index, runs) => {
  const mergedData = [];
  let i = 0;
  let j = 0;
  console.clear();
  console.log(represent(runs.flat(), 0, sortedData.length - 1 + run.length, -1));
  console.log(represent([" "], i, j, -1));
  delay();
  while (i < sortedData.length && j < run.length) {
    if (sortedData[i] < run[j]) {
      mergedData.push(sortedData[i]);
      i++;
    } else {
      mergedData.push(run[j]);
      j++;
    }
    console.clear();
    console.log(represent(runs.flat(), 0, sortedData.length - 1 + run.length, -1));
    console.log(represent(mergedData, i, j, -1));
    delay();
  }
  
  while (i < sortedData.length) {
    mergedData.push(sortedData[i]);
    i++;
    console.clear();
    console.log(represent(runs.flat(), 0, sortedData.length - 1 + run.length, -1));
    console.log(represent(mergedData, i, j, -1));
    delay();
  }

  while (j < run.length) {
    mergedData.push(run[j]);
    j++;
    console.clear();
    console.log(represent(runs.flat(), 0, sortedData.length - 1 + run.length, -1));
    console.log(represent(mergedData, i, j, -1));
    delay();
  }
  
  return mergedData;
}

const mergeSort = (data) => {
  const runs = findRuns(data);
  const sortedData = runs.reduce(merge);
  console.log(sortedData);
}

function main(args) {
  const data = [];
  for (let i = 0; i < args.length; i++) {
    data.push(parseInt(args[i]));
  }
  mergeSort(data);
}

main(Deno.args);
