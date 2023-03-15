import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Availability } from "../App";

interface DatePickerProp {
  availability: Availability[];
  date: Dayjs | null;
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
}

////////////////////////////////
const DatePicker = ({
  date,
  setDate,
  setMonth,
  availability,
}: DatePickerProp) => {
  const handleChange = async (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  const shouldDisableDate = (day: Dayjs) => {
    const currentDay = day?.format("DD-MM-YYYY");

    const isAvailableDay = availability.find(
      (elem) => elem.date === currentDay
    );

    if (!isAvailableDay) {
      return !!!isAvailableDay;
    }

    return !!isAvailableDay.slots.every((slot) => slot.availableSlot === 0);
  };

  //////////
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="DD/MM/YYYY"
          value={date}
          onMonthChange={(month: Dayjs) => setMonth(month.month())}
          shouldDisableDate={shouldDisableDate}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
