import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Gender from "../../Gender/Gender";

export default function BookingForm() {
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1 },

        width: "500px",
      }}
    >
      <div>
        <TextField
          id="outlined-fname-input"
          label="First Name"
          type="text"
          name="fname"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-lname-input"
          label="Last Name"
          name="lname"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className="fw-input"
          id="outlined-email-input"
          label="Email"
          name="email"
          type="Email"
          placeholder="example@gmail.com"
          InputLabelProps={{
            shrink: true,
          }}
        />{" "}
        <TextField
          className="fw-input"
          id="outlined-nrc-input"
          label="NRC"
          name="nrc"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className="fw-input"
          id="outlined-dob-input"
          label="dob"
          name="dob"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Gender />
      </div>
    </Box>
  );
}
