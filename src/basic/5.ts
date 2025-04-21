enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const dayState = (day: DayOfWeek): string => {
  if (day == DayOfWeek.Saturday || day == DayOfWeek.Sunday) {
    return "Вихідний";
  }
  return "Робочий";
};

// console.log(dayState(DayOfWeek.Friday));
// console.log(dayState(DayOfWeek.Sunday));

export {};
