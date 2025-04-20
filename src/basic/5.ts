enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): string => {
  if (day == DayOfWeek.Saturday || day == DayOfWeek.Sunday) {
    return "Вихідний";
  }
  return "Робочий";
};

// console.log(isWeekend(DayOfWeek.Friday));
// console.log(isWeekend(DayOfWeek.Sunday));

export {};
