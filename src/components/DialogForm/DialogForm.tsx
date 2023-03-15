import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dispatch, useEffect, useRef } from "react";
import BookingForm from "../BookingForm/BookingForm";

type DialogFormProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  scroll: "body" | "paper" | undefined;
  setScroll: Dispatch<React.SetStateAction<"body" | "paper" | undefined>>;
};

type FormDataGetName = ["fname", "lname", "email", "nrc", "dob", "gender"];

export default function DialogForm({
  open,
  setOpen,
  scroll,
  setScroll,
}: DialogFormProps) {
  //   const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
  //     setOpen(true);
  //     setScroll(scrollType);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const formData = new FormData(e.currentTarget);

    console.log(
      getFormData(formData, ["fname", "lname", "email", "nrc", "dob", "gender"])
    );
  };

  const getFormData = (formData: FormData, names: FormDataGetName) => {
    const data = names.map((name) => {
      let returnObj: any = {};
      returnObj[name] = formData.get(name);
      return returnObj;
    });

    return data;
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <BookingForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
