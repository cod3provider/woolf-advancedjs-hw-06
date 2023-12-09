/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}

const today: Days = Days.Saturday;

if (isWeekend(today)) {
  console.log('Today is Weekend')
} else {
  console.log('Today is not Weekend')
}
