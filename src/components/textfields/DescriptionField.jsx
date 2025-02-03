import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const MAX_LENGTH = 5000;

const DescriptionField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        상세 설명
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        value={value}
        onChange={handleChange}
        placeholder="제품에 대해 자세히 설명해주세요"
        error={!!error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
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

export default DescriptionField;
