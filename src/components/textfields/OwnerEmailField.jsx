import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const OwnerEmailField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Owner Email
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter owner email"
        error={!!error}
        helperText={error || "Example: owner@example.com"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default OwnerEmailField;
