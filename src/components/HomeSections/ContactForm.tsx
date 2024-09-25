import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export const ContactForm: React.FC = () => {
  return (
    <section className="bg-white p-8 shadow-lg rounded-md max-w-md mx-auto">
      <Typography variant="h5" className="font-semibold text-blue-900 mb-4">
        Contact Us Today
      </Typography>
      <form className="space-y-4">
        <TextField fullWidth label="First Name" variant="outlined" />
        <TextField fullWidth label="Last Name" variant="outlined" />
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField fullWidth label="Phone Number" variant="outlined" />
        <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
        <Button fullWidth variant="contained" color="primary" className="bg-blue-500 text-white">
          Submit
        </Button>
      </form>
    </section>
  );
};
