import React from "react";
import { Typography, Grid, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const IsFreeField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
        가격 여부
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <FormControlLabel value="무료" control={<Radio />} label="무료" />
          <FormControlLabel value="유료" control={<Radio />} label="유료" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default IsFreeField;
