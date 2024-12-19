import React from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";

const LocationField = ({
  location,
  errors,
  onLocationChange,
  onMapOpen,
}) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        주소 선택
      </Typography>
      <TextField
        placeholder="'주소 선택'을 눌러주세요"
        variant="outlined"
        fullWidth
        required
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        error={!!errors.location}
        helperText={errors.location}
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" onClick={onMapOpen} sx={{ mb: 3 }}>
        주소 선택
      </Button>
    </Grid>
  );
};

export default LocationField;