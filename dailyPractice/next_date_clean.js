function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isNotCenturyYear = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;
  const isYearNot0 = year !== 0;
  const leapYear = (isDivisibleBy4 && isNotCenturyYear) || isDivisibleBy400;

  return leapYear && isYearNot0;
}

function noOfDaysIn(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if (month < 8) {
    return month % 2 !== 0 ? 31 : 30;
  }

  return month % 2 === 0 ? 31 : 30;
}

function isInvalid(day, month, year) {
  if (year < 0 || year > 9999) {
    return true;
  }

  if (month < 1 || month > 12) {
    return true;
  }

  if (day < 1 || day > noOfDaysIn(month, year)) {
    return true;
  }

  return false;
}

function padZeros(text, lengthOfText = 2) {
  return text.padStart(lengthOfText, "0");
}

function format(day, month, year) {
  const paddedDay = padZeros(day + "");
  const paddedMonth = padZeros(month + "");
  const paddedYear = padZeros(year + "", 4);
  return `${paddedDay}-${paddedMonth}-${paddedYear}`;
}

function nextDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 11));
  if (isInvalid(day, month, year)) {
    return "Invalid Date";
  }
  if (day === noOfDaysIn(month, year) && month === 12) {
    return format(1, 1, year + 1);
  }
  if (day === noOfDaysIn(month, year)) {
    return format(1, month + 1, year);
  }
  return format(day + 1, month, year);
}

function trueMessage(description) {
  const symbol = "📈";
  const message = symbol + description + "\n";
  console.log(message);
}

function falseMessage(actual, expected, description) {
  const symbol = "📉";
  const actualMessage = "| Actual   : " + actual + "   |\n";
  const expectedMessage = "| Expected : " + expected + "   |\n";
  const result = "| Failed!!! 😬   | \n";
  let message = symbol + description + "\n";
  message += actualMessage + expectedMessage + result;
  console.log(message);
}

function test(description, string, expected) {
  const result = nextDate(string);
  const isTestPassed = result === expected;
  if (isTestPassed) {
    trueMessage(description);
  } else {
    falseMessage(result, expected, description);
  }
}

function testIncrementingDate() {
  test("Simple increment of a normal day", "15-03-2021", "16-03-2021");
  test("year less than 2000", "15-03-1981", "16-03-1981");
  test("Year less than 1000", "15-03-0981", "16-03-0981");
  test("0th year", "01-01-0000", "02-01-0000");
}

function testIncrementingMonth() {
  test("Increment of a month having 30 days", "30-04-2022", "01-05-2022");
  test("Increment of a month having 31 days", "31-05-2022", "01-06-2022");
  test("Last day in February in a leap year", "28-02-2020", "29-02-2020");
  test("Last day in February in a non-leap year", "28-02-2021", "01-03-2021");
}

function testIncrementingYear() {
  test("Increment of a last day in noraml year", "31-12-2015", "01-01-2016");
  test("Increment of a last day in a decade", "31-12-2019", "01-01-2020");
  test("Increment of a last day in a century", "31-12-1999", "01-01-2000");
}

function testAllIsInvalid() {
  test("Day more than 31 in 31 days month", "32-01-2000", "Invalid Date");
  test("Day more than 30 in 30 days month", "31-02-2000", "Invalid Date");
  test("After 28th February(non-leap year)", "29-02-2001", "Invalid Date");
  test("more than 29 in February(leap year)", "30-02-2000", "Invalid Date");
  test("Day less than 1 in any month", "00-02-2000", "Invalid Date");
  test("Month more than 12 in a year", "30-13-2000", "Invalid Date");
  test("Month less than 1 in a year", "30-00-2000", "Invalid Date");
  test("Year greater than 9999", "11-11-10000", "Invalid Date");
}

function testAll() {
  testIncrementingDate();
  testIncrementingMonth();
  testIncrementingYear();
  testAllIsInvalid();
}

testAll();