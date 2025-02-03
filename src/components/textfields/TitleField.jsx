import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";

const MAX_LENGTH = 80;

const TitleField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        제품 제목
      </Typography> 
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        placeholder="제품의 제목을 입력하세요"
        error={!!error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon />
            </InputAdornment>
          ),
        }}
      />
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Grid>
  );
};

export default TitleField;