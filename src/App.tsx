import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "./App.css";
import { DialogProps } from "@mui/material/Dialog";
import DatePicker from "./components/DatePicker";
import DialogForm from "./components/DialogForm/DialogForm";
import TimePicker, { Slot } from "./components/TimePicker/TimePicker";

export interface Availability {
  date: string;
  month: string;
  slots: Slot[];
}
///////////////
function App() {
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [month, setMonth] = useState<number>(dayjs().month());

  ///dialog
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const fetchAvailability = async (month: number) => {
    console.log("fetch all availability...");

    const url = `http://localhost:5000/availability?month=${month}`;
    const response = await fetch(url);
    const data = await response.json();

    setAvailability(data.availability);
  };

  useEffect(() => {
    fetchAvailability(month);
  }, [month]);

  useEffect(() => {
    const chekDateAva = availability.find(
      (ava) => ava.date === date?.format("DD-MM-YYYY")
    );
    setSlots(chekDateAva?.slots || []);
    console.log("running useEffect...");
  }, [availability, date]);

  const handleClickOpen = (
    scrollType: DialogProps["scroll"],
    chosenTime: string
  ) => {
    console.log("Hello", chosenTime);
    setOpen(true);
    setScroll(scrollType);
  };

  return (
    <div className="paddingxy w-400">
      <DatePicker
        availability={availability}
        date={date}
        setDate={setDate}
        setMonth={setMonth}
      />
      <TimePicker slots={slots} handleClickOpen={handleClickOpen} />
      <DialogForm
        open={open}
        setOpen={setOpen}
        scroll={scroll}
        setScroll={setScroll}
      />
    </div>
  );
}

export default App;
