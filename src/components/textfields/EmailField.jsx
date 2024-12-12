import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const EmailField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        이메일 주소
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        placeholder="이메일 주소를 입력하세요"
        error={!!error}
        helperText={error || ""}
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

export default EmailField;
