const availability = [
  {
    date: "09-03-2023",
    month: "2",
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 300, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 150, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "10-03-2023",
    month: "2",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 20, totalAvailable: 100, availableSlot: 80 },
      { time: "12", reserved: 50, totalAvailable: 60, availableSlot: 10 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "11-03-2023",
    month: "2",
    slots: [
      { time: "10", reserved: 100, totalAvailable: 200, availableSlot: 100 },
      { time: "11", reserved: 300, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 100, totalAvailable: 150, availableSlot: 50 },
    ],
  },
  {
    date: "12-03-2023",
    month: "2",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 100, availableSlot: 100 },
      { time: "11", reserved: 20, totalAvailable: 120, availableSlot: 100 },
      { time: "12", reserved: 30, totalAvailable: 50, availableSlot: 20 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "12-04-2023",
    month: "3",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 0, totalAvailable: 100, availableSlot: 100 },
      { time: "12", reserved: 50, totalAvailable: 60, availableSlot: 10 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "23-04-2023",
    month: "3",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 0, totalAvailable: 100, availableSlot: 100 },
      { time: "12", reserved: 50, totalAvailable: 60, availableSlot: 10 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "21-04-2023",
    month: "3",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 0, totalAvailable: 100, availableSlot: 100 },
      { time: "12", reserved: 50, totalAvailable: 60, availableSlot: 10 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "04-05-2023",
    month: "4",
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 0, totalAvailable: 100, availableSlot: 100 },
      { time: "12", reserved: 50, totalAvailable: 60, availableSlot: 10 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
];

module.exports = availability;
