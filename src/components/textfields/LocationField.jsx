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
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Location of the restaurant
      </Typography>
      <TextField
        placeholder="Click 'Select Location' to pick on the map"
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
        Select Location
      </Button>
    </Grid>
  );
};

export default LocationField;