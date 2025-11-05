function meanOf(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum / data.length;
}

function diffFromMean(data, mean) {
  const differences = data.slice();
  for (let i = 0; i < differences.length; i++) {
    differences[i] = mean - differences[i];
  }

  return differences;
}

function squareOf(data) {
  const squares = data.slice();
  for (let i = 0; i < squares.length; i++) {
    squares[i] *= squares[i];
  }

  return squares;
}

function deviationOf(data) {
  const mean = meanOf(data);
  const differences = diffFromMean(data, mean);
  const squares = squareOf(differences);
  const meanOfSqrs = meanOf(squares);
  const deviation = meanOfSqrs ** 1/2;
  console.log(data)
  console.log("Deviation =>", deviation);
}

deviationOf([2, 4, 4, 4, 5, 5, 7, 9])