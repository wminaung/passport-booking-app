import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Gender() {
  return (
    <FormControl sx={{ paddingLeft: "8px" }}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel
          value="female"
          control={<Radio size="small" />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio size="small" />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio size="small" />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
