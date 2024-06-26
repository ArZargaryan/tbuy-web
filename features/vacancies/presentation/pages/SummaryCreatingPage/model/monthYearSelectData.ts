import dayjs from "dayjs";

export const months = [
  { id: 1, value: "January" },
  { id: 2, value: "February" },
  { id: 3, value: "March" },
  { id: 4, value: "April" },
  { id: 5, value: "May" },
  { id: 6, value: "June" },
  { id: 7, value: "July" },
  { id: 8, value: "August" },
  { id: 9, value: "September" },
  { id: 10, value: "October" },
  { id: 11, value: "November" },
  { id: 12, value: "December" }
];

const yearArr = [];

for (let i = dayjs().year(); i >= 1970; i--) {
  yearArr.push({ id: i, value: `${i}` });
}

export const years = yearArr;
