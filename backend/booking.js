const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const get = () =>
  JSON.parse(
    readFileSync(join(__dirname, "booking.json"), { encoding: "utf-8" })
  );

const set = (data) => {
  writeFileSync(join(__dirname, "booking.json"), JSON.stringify(data));
};

module.exports.booking = {
  get,
  set,
};
