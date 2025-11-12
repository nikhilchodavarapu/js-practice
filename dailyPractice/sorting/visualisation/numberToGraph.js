const toGraph = function (number) {
  let element = [];
  for (let i = 0; i < 50 - number - 1; i++) {
    element.push("    ");
  }

  element.push('____')
  
  for (let i = 0; i < number; i++) {
    element.push('|  |');
  }
  
  console.log(element.join('\n'));
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
console.log(represent([1, 2, 3, 4, 5]));