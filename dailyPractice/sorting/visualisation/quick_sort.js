const swap = function (data, i, j) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

const putElementInPosition = function (data, lowBound, upBound) {
  const currentElement = data[lowBound];
  let start = lowBound + 1;
  let end = upBound;

  while (start <= end) {
    while (data[start] < currentElement && start <= end) {
      start++;
    }
    while (data[end] >= currentElement && start <= end) {
      end--;
    }
    if (start < end) {
      swap(data, start, end);
    }
  }
  swap(data, lowBound, end);

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
  quickSort(data)
  console.log(data)
}

main(Deno.args);
