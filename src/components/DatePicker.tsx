import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";
import TimePicker from "./TimePicker/TimePicker";
import { Button } from "@mui/material";

const DatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const [slots, setSlots] = useState([]);

  const fetchAvailability = async (date: Dayjs | null) => {
    const chosenDate = date?.format("DD-MM-YYYY");
    const url = `http://localhost:5000/availability?date=${chosenDate}`;
    const response = await fetch(url);
    const data = await response.json();
    setSlots(data.slots);
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    fetchAvailability(newValue);
  };

  return (
    <div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div>
        <TimePicker slots={slots} />
      </div>
    </div>
  );
};

export default DatePicker;
