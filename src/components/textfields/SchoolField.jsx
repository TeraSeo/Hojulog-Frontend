import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const MAX_LENGTH = 100;

const SchoolField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        학교 이름
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        placeholder="학교 이름을 입력하세요"
        error={!!error}
        helperText={
          error ||
          `${value.length}/${MAX_LENGTH} ${
            value.length >= MAX_LENGTH ? "(최대 길이에 도달했습니다)" : ""
          }`
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SchoolIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SchoolField;
