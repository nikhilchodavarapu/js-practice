const MONTHS = [
'             January                February                  March                ',
'              April                   May                      June                ',
'              July                   August                 September              ',
'             October                 November                December               '
]
let THREE_MONTHS = [];
const YEAR = [MONTHS[0]];

const ordinaryDays = function (year) {
  return year * 365;
}

const leapDays =  function (year) {
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
}

const isLeapYear = function(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isCenturyYear = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;
  return isDivisibleBy4 && !isCenturyYear && isDivisibleBy400;
}

const daysInMonth = function(month, year) {
  switch (month) {
    case 2: return isLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}

const dayNumber = function(date, month, year) {
  let daysInCurrentYear = 0;
  for (let mm = 1; mm < month; mm++) {
    daysInCurrentYear += daysInMonth(mm, year);
  }
  daysInCurrentYear += date;
  const totalNoDays = ordinaryDays(year - 1) + leapDays(year - 1) + daysInCurrentYear;
  return (totalNoDays + 6) % 7;
}

const pad = function (day, length = 2) {
  return (day + "").padStart(length);
}

const createMonth = function (firstDay, noOfDays, mm) {
  const noOfEmpty = (firstDay + 1) % 7;
  const days = [['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], []];
  let week = [];

  for (let i = 0; i < noOfEmpty; i++) {
    week.push(pad(" "));
  }

  for (let i = 1; i <= noOfDays; i++) {
    week.push(pad(i));
    if (week.length === 7) {
      days.push(week);
      week = [];
    }
  }

  while (week.length % 7 !== 0) {
    week.push(pad(" "));
  }

  days.push(week);

  for (let i = 0; i < days.length; i++) {
    days[i] = days[i].join(' ')
  }
  
  days[7] = days.length === 7 ? ' '.repeat(20) : days[7].padEnd(21);
  for (let i = 0; i < days.length; i++) {
    const prev = THREE_MONTHS[i] === undefined ? "" : THREE_MONTHS[i];
    THREE_MONTHS[i] = prev + ' '.repeat(5) + days[i];
  }
  if (mm % 3 === 0) {
    YEAR.push(THREE_MONTHS.join('\n'));
    THREE_MONTHS = [];
    YEAR.push(MONTHS[mm / 3])
  }
  
  return days.join('\n');
}

const displayMonth = function (mm, year) {
  const firstDay = dayNumber(1, mm, year);
  const noOfDays = daysInMonth(mm, year);
  const month = createMonth(firstDay, noOfDays, mm);
}

const displayYear = function (args) {
  if (args.length === 0) args.push(2025);
  const year = parseInt(args[0]);
  for (let i = 1; i < 13; i++) {
    displayMonth(i, year);
  }
}

displayYear(Deno.args)
console.log(YEAR.join('\n'))
