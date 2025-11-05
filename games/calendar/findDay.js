function calculateOdrinaryDays(yyyy) {
  console.log(yyyy)
  return yyyy * 365;
}

function calculateLeapDays(yyyy) {
  return Math.floor(yyyy / 4) - Math.floor(yyyy / 100) + Math.floor(yyyy / 400);
}

function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isCenturyYear = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;
  return (isDivisibleBy4 && !isCenturyYear) || isDivisibleBy400;
}

function findNoOfdaysInMonth(month, yyyy) {
  switch (month) {
    case 2: return isLeapYear(yyyy) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}

function findDayNumber(date, month, year) {
  const ordinaryDays = calculateOdrinaryDays(year - 1);
  const leapDays = calculateLeapDays(year - 1);
  let daysInCurrentYear = 0;
  for (let mm = 1; mm < month; mm++) {
    daysInCurrentYear += findNoOfdaysInMonth(mm, year);
  }
  daysInCurrentYear += date;
  const totalNoDays = ordinaryDays + leapDays + daysInCurrentYear;
  console.log(ordinaryDays, leapDays, daysInCurrentYear, totalNoDays )
  return (totalNoDays + 6) % 7;
}

function findCorrespondingDay(day) {
  switch(day) {
    case 0: return 'Monday';
    case 1: return 'Tuesday';
    case 2: return 'Wednesday';
    case 3: return 'Thursday';
    case 4: return 'Friday';
    case 5: return 'Saturday';
    case 6: return 'Sunday';
  }
}

function findDayOfAnyDate() {
  const date = prompt("Enter date (format : dd-mm-yyyy) : ");
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 10));
  const dayNumber = findDayNumber(day, month, year);
  const dayInWeek = findCorrespondingDay(dayNumber);
  console.log(day, month, year, dayInWeek);
}

findDayOfAnyDate()
