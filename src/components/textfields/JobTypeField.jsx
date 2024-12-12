import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem } from "@mui/material";

const JobTypeField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        근무 형태
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="근무 형태를 선택하세요"
        >
          <MenuItem value="단기알바">단기알바</MenuItem>
          <MenuItem value="파트타임">파트타임</MenuItem>
          <MenuItem value="풀타임">풀타임</MenuItem>
        </Select>
      </FormControl>
      {error && <Typography color="error">{error}</Typography>}
    </Grid>
  );
};

export default JobTypeField;
