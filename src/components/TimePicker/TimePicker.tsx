import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import "./TimePicker.css";

const TimePicker = ({ slots }: any) => {
  const [value, setValue] = useState("");

  // console.log("TP : slots : ", slots);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    // console.log(value, "value");
    setValue(value);
  };

  const handleClick = () => {
    console.log("This is", value, "hour");

    const slot = slots.find((slot: any) => {
      const time = Object.keys(slot)[0];
      return time === value;
    });
    console.log(slot[value]);
  };

  return slots.length > 0 ? (
    <div className="container">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {slots.map((slot: any, idx: number) => {
            const time = Object.keys(slot)[0];

            return (
              <div key={idx}>
                <FormControlLabel
                  value={time}
                  control={<Radio />}
                  label={time}
                />
              </div>
            );
          })}
        </RadioGroup>
      </FormControl>

      <Button variant="contained" onClick={handleClick}>
        choose
      </Button>
    </div>
  ) : (
    <div>There is no slots</div>
  );
};

export default TimePicker;
