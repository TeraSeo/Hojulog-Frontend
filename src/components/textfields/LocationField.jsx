import React from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";

const LocationField = ({
  location,
  error,
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
        error={!!error}
      />
      {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

      <Button variant="outlined" onClick={onMapOpen} sx={{ mt: 2 }}>
        주소 선택
      </Button>
    </Grid>
  );
};

export default LocationField;