import React from "react";
import { Typography, Grid, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const TransactionTypeField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
        거래 유형
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <FormControlLabel value="구매" control={<Radio />} label="구매" />
          <FormControlLabel value="판매" control={<Radio />} label="판매" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default TransactionTypeField;
