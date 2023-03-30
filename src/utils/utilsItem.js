export function todayIs() {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var today = new Date();

  return [
    DAYS[today.getDay()] + ",",
    today.getDate(),
    MONTHS[today.getMonth()],
    today.getFullYear(),
  ].join(" ");
}
