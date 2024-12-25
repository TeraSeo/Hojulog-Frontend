import React from "react";
import { Grid, Typography, FormControl, MenuItem, Select } from "@mui/material";

const RoomCountField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        방 개수
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            border: error ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <MenuItem value="방 쉐어+">방 쉐어</MenuItem>
          <MenuItem value="Studio+">Studio+</MenuItem>
          <MenuItem value="1+">1+</MenuItem>
          <MenuItem value="2+">2+</MenuItem>
          <MenuItem value="3+">3+</MenuItem>
          <MenuItem value="4+">4+</MenuItem>
          <MenuItem value="5+">5+</MenuItem>
        </Select>
      </FormControl>
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Grid>
  );
};

export default RoomCountField;
