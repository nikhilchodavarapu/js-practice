/**
 * Implement the `nextDate` function below.
 * Given a date in the format dd-mm-yyyy,
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format.
 * This means the first two characters will be digits for the day
 * (e.g., 01, 23),
 * followed by a hyphen (-),
 * the next two characters will be digits for the month (e.g., 01, 12),
 * followed by another hyphen,
 * and the remaining four characters will be digits for the year
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy),
 * for example, "32-02-2025",
 * return "Invalid Date".
 */

function isInvalid(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 6));
  const year = parseInt(date.slice(6, 11));

  if (month > 12 || month < 1) {
    return true;
  }

  if (year < 0 || year > 9999) {
    return true;
  }

  if (isFebruary(date)) {
    if (isLeapYear(date) && (day > 29 || day < 1)) {
      return true;
    }
    if (!isLeapYear(date) && (day > 28 || day < 1)) {
      return true;
    }
  }

  if (is31DaysMonth(date)) {
    return day > 31 || day < 1;
  }

  if (!is31DaysMonth(date)) {
    return day > 30 || day < 1;
  }

  return false;
}

function incrementToNextDay(date) {
  let newDate = date.slice(2, 10);
  let newDay = parseInt(date[0] + date[1]) + 1;
  newDay += "";
  newDate = newDay.padStart(2, "0") + newDate;
  return newDate;
}

function incrementToNextMonth(date) {
  let newDate = "01-";
  let newMonth = parseInt(date[3] + date[4]) + 1;
  newMonth += "";
  newDate += newMonth.padStart(2, "0");
  newDate += '-' + date.slice(6, 10);
  return newDate;
}

function incrementToNextYear(date) {
  let newDate = "01-01-";
  let newYear = parseInt(date.slice(6, 10)) + 1;
  newYear += "";
  newDate += newYear.padStart(4, '0');
  return newDate;
}

function isFebruary(date) {
  return date.slice(3, 5) === "02";
}

function isDecember(date) {
  return date.slice(3, 5) === "12";
}

function isLeapYear(date) {
  const year = parseInt(date.slice(6, 10));
  const isDivisibleBy4 = year % 4 === 0;
  const isNotCenturyYear = year % 100 !== 0;
  const isDivisibleBy400 = year % 400 === 0;
  return (isDivisibleBy4 && isNotCenturyYear) || isDivisibleBy400;
}

function is31DaysMonth(date) {
  const month = parseInt(date.slice(3, 5));

  if (month < 8) {
    return month % 2 !== 0;
  }

  return month % 2 === 0;
}

function isLastDay(date) {
  const day = parseInt(date.slice(0, 2));

  if (isFebruary(date)) {
    return (!isLeapYear(date) && day === 28) || (isLeapYear(date) && day === 29);
  }

  if (!is31DaysMonth(date) && day === 30) {
    return true;
  }

  if (is31DaysMonth(date) && day === 31) {
    return true;
  }

  return false;
}

function nextDate(date) {
  if (isInvalid(date)) {
    return "Invalid Date";
  }

  if (isDecember(date) && isLastDay(date)) {
    return incrementToNextYear(date);
  }

  if (isFebruary(date) && isLastDay(date)) {
    return incrementToNextMonth(date);
  }

  if (!is31DaysMonth(date) && isLastDay(date)) {
    return incrementToNextMonth(date);
  }

  if (is31DaysMonth(date) && isLastDay(date)) {
    return incrementToNextMonth(date);
  }

  return incrementToNextDay(date);
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

function testAll() {
  test("Simple increment of a normal day", "15-03-2021", "16-03-2021");
  test("Increment of a normal day in a year less than 2000", "15-03-1981", "16-03-1981");
  test("Simple increment of a normal day in a year less than 1000", "15-03-0981", "16-03-0981");
  test("Increment of a month having 30 days", "30-04-2022", "01-05-2022");
  test("Increment of a month having 31 days", "31-05-2022", "01-06-2022");
  test("Last day in February in a leap year", "28-02-2020", "29-02-2020");
  test("Last day in February in a non-leap year", "28-02-2021", "01-03-2021");
  test("Increment of a last day in a noraml year", "31-12-2015", "01-01-2016");
  test("Increment of a last day in a decade", "31-12-2019", "01-01-2020");
  test("Increment of a last day in a century", "31-12-1999", "01-01-2000");
  test("0th year", "01-01-0000", "02-01-0000");
  test("Day more than 31 in 31 days month", "32-01-2000", "Invalid Date");
  test("Day more than 30 in 30 days month", "31-02-2000", "Invalid Date");
  test("Day more than 28 in February in a non-leap year", "29-02-2001", "Invalid Date");
  test("Day more than 29 in February in a leap year", "30-02-2000", "Invalid Date");
  test("Day less than 1 in any month", "00-02-2000", "Invalid Date");
  test("Month more than 12 in a year", "30-13-2000", "Invalid Date");
  test("Month less than 1 in a year", "30-00-2000", "Invalid Date");
  test("Year greater than 9999", "11-11-10000", "Invalid Date");
}

testAll();