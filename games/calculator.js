function createCalculator() {
  const CALCULATOR_TEMPLATE = 
`_________________________
|                       |
|                       |
|_______________________|
|     |     |     |     |
|  C  | ( ) |  %  |  ÷  |
|_____|_____|_____|_____|
|     |     |     |     |
|  7  |  8  |  9  |  x  |
|_____|_____|_____|_____|
|     |     |     |     |
|  4  |  5  |  6  |  -  |
|_____|_____|_____|_____|
|     |     |     |     |
|  1  |  2  |  3  |  +  |
|_____|_____|_____|_____|
|           |     |     |
|     0     |  .  |  =  |
|___________|_____|_____|`

  const calculator = CALCULATOR_TEMPLATE.split('\n');
  for (let index = 0; index < calculator.length; index++) {
    calculator[index] = calculator[index].split("");
  }

  return calculator;
}

const CALCULATOR = createCalculator();
const POSSIBLE_OPERATIONS = "+-x*/%()=";
const OPERANDS = [];
const OPERATORS = [];

function displayCalculator() {
  let string = "";
  for (let row = 0; row < CALCULATOR.length; row++) {
    for (let col = 0; col < CALCULATOR[row].length; col++) {
      string += CALCULATOR[row][col]
    }
    string += '\n';
  }

  console.log(string)
}

function isOperator(input) {
  return POSSIBLE_OPERATIONS.includes(input);
}

function placeItInCalc(value) {
  const valueString = CALCULATOR[2].join("");
  const currentValue = value !== "" ? (valueString.slice(1, 22) + value).trim() : ' '.repeat(21);
  let index = 21;
  for (let stringIndex = currentValue.length - 1; stringIndex >= 0; stringIndex--) {
    CALCULATOR[2][index] = currentValue[stringIndex];
    index--;
  }
}

function separate() {
  const valueString = CALCULATOR[2].join("");
  const currentValue = valueString.slice(1, 22).trim();
  let operand = "";
  for (let index = 0; index < currentValue.length; index++) {
    const value = currentValue[index]
    if (isOperator(value)) {
      operand !== "" ? OPERANDS.push(+operand) : "";
      OPERATORS.push(value);
      operand = "";
    } else {
      operand += value;
    }
  }
  operand !== "" ? OPERANDS.push(+operand) : "";
  console.log("SEPERATED =>", OPERANDS, OPERATORS)
}

function priority(operator) {
  if (operator === '+' || operator === '-') 
    return 1;
  
  if (operator === '*' || operator === '/' || operator === 'x')
    return 2;
  
  if (operator === '(')
    return 3;

  return 0;
}

function indexOfOperator() {
  let operatorIndex = 0;
  let highestPriority = 0;
  for (let index = 0; index < OPERATORS.length; index++) {
    if (highestPriority < priority(OPERATORS[index])) {
      operatorIndex = index;
      highestPriority = priority(OPERATORS[index]);
    }
  }
  return operatorIndex;
}

function subCalculation(operatorIndex) {
  const valueString = CALCULATOR[2].join("");
  const currentValue = valueString.slice(1, 22).trim();
  let index = operatorIndex;
  let value = "";
  while (OPERATORS[index + 1] !== ')') {
    value += OPERANDS[index] + OPERATORS[index + 1];
    index++;
  }
  value += OPERANDS[index];
  placeItInCalc("");
  placeItInCalc(value);
  const result = calculate();
  console.log(value, result)
  placeItInCalc("");
  placeItInCalc(currentValue);
  clearEverything();
  separate();
  const valueIndex = OPERATORS.indexOf('(');
  console.log("Sub Calculation =>", OPERANDS, OPERATORS);
  for (let i = 0; i < (value.length + 1) / 2; i++) {
    for (let i = valueIndex; i < OPERATORS.length - 1; i++) {
      OPERATORS[i] = OPERATORS[i + 1];
    }
    OPERATORS.pop();
  }
  
  for (let i = 0; i < (value.length + 1) / 2 - 2; i++) {
    for (let i = valueIndex; i < OPERANDS.length - 1; i++) {
      OPERANDS[i] = OPERANDS[i + 1];
    }
    OPERANDS.pop();
  }
  return result;
}

function performOperation(x, y, operator, index) {
  switch(operator) {
    case '+' : return x + y;
    case '-' : return x - y;
    case '*' :
    case 'x' : return x * y;
    case '/' : return x / y;
    case '%' : return x % y;
    case '(' : return subCalculation(index);
  }
}

function shiftLeft(index, element) {
  OPERANDS[index] = element;
  for (let i = index; i < OPERANDS.length - 2; i++) {
    OPERANDS[i + 1] = OPERANDS[i + 2];
    OPERATORS[i] = OPERATORS[i + 1];
  }
  OPERANDS.pop();
  OPERATORS.pop();
}

function clearEverything() {
  const length = OPERATORS.length;
  for (let index = 0; index < length; index++) {
    OPERANDS.pop();
    OPERATORS.pop();
  }
  OPERANDS.pop();
}

function placeResultInCalc() {
  let value = "";
  for (let index = 0; index < OPERATORS.length; index++) {
    value += OPERANDS[index] + OPERATORS[index];
  }
  value += OPERANDS[OPERANDS.length - 1];
  placeItInCalc(value);
}

function calculate() {
  clearEverything();
  separate();
  let count = 0;
  let result = 0;
  while (OPERATORS.length > 0 && count < 10) {
    const index = indexOfOperator();
    result = performOperation(OPERANDS[index], OPERANDS[index + 1], OPERATORS[index], index);
    shiftLeft(index, result);
    placeItInCalc("");
    console.log(OPERANDS, OPERATORS)
    placeResultInCalc();
    clearEverything();
    separate()
    count++;
  }
  return result;
}

function takeInputs() {
  displayCalculator();
  while (true) {
    let input = prompt("Enter number / operator (type 'exit' to exit) :");
    console.clear();
    if (input === 'C') placeItInCalc("");
    input === '=' ? calculate() : placeItInCalc(input);
    displayCalculator();
    if (input === "exit") {
      return;
    }
    // console.log(input, CALCULATOR[2][21])

  }
}

takeInputs()
