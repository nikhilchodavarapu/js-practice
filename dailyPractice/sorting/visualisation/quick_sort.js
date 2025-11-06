const swap = function (data, i, j) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

const putElementInPosition = function (data, lowBound, upBound) {
  const currentElement = data[lowBound];
  let start = lowBound;
  let end = upBound;
  while (start < end) {
    while (data[start] < currentElement && start < end) {
      start++;
    }
    while (data[end] >= currentElement && start < end) {
      end--;
    }
    if (start < end) {
      swap(data, start, end);
    } else {
      swap(data, currentElement, end)
    }
  }

  return end;
}

const seperate = function (data, lowBound, upBound) {
  if (lowBound < upBound) {
    const seperator = putElementInPosition(data, lowBound, upBound);
    seperate(data, lowBound, seperator - 1);
    seperate(data, seperator + 1, upBound);
  }
}

const quickSort = function(data) {
  seperate(data, 0, data.length - 1);
}

