const express = require("express");
const cors = require("cors");
const uuid = require("uuid");
const availability = require("./data");
const { booking } = require("./booking");
const app = express();
const port = 5000;
app.use(express.json(), cors());

///////////////////////////////////////
app.get("/availability", (req, res) => {
  console.count("data fetching from client");
  const chosenMonth = req.query.month;

  const availabilityForChosenMonth = availability.filter(
    (elem) => elem.month === chosenMonth
  );

  res.json({ availability: availabilityForChosenMonth });
  // res.json({ availability: availability });
});

app.post("/register/:id", (req, res) => {
  if (!req.params.id) return res.send({ message: "need param" });
  const newBooking = req.body;
  const currentBooking = [...booking.get()];

  const newBookingToPush = {
    ...newBooking,
    id: uuid.v4(),
    registerDate: req.params.id,
  };

  currentBooking.push(newBookingToPush);
  booking.set(currentBooking);
  return res.send({ newBookingToPush });
});

////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
