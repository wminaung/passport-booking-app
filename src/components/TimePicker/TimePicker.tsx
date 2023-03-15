import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DialogProps } from "@mui/material/Dialog";
import { useState } from "react";
import "./TimePicker.css";

export interface Slot {
  time: string;
  reserved: number;
  totalAvailable: number;
  availableSlot: number;
}

interface TimePickerProp {
  slots: Slot[];

  handleClickOpen: (
    scrollType: DialogProps["scroll"],
    chosenTime: string
  ) => void;
}
//////////////////////

const TimePicker = ({ slots, handleClickOpen }: TimePickerProp) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setValue(value);
  };

  return slots.length > 0 ? (
    <div className="container">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue={"10"}
          onChange={handleChange}
        >
          {slots.map((slot: Slot, idx: number) => {
            return (
              <div key={idx}>
                <FormControlLabel
                  value={slot.time}
                  control={<Radio />}
                  label={slot.time + " Hour | "}
                />
                <span>
                  totalAvailable : {slot.totalAvailable} | reserved :{" "}
                  {slot.reserved} | availableSlot {slot.availableSlot}
                </span>
              </div>
            );
          })}
        </RadioGroup>
      </FormControl>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            console.log("click");
            handleClickOpen("paper", value);
          }}
        >
          choose
        </Button>
      </div>
    </div>
  ) : (
    <div>There is no slots</div>
  );
};

export default TimePicker;
