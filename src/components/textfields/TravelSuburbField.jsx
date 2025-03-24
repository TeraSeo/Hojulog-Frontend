import React from "react";
import {
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import { travelSuburbs } from "../../constant/Countries";

const TravelSuburbField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        지역 선택
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          startAdornment={<PublicIcon sx={{ marginRight: 1 }} />}
        >
          {travelSuburbs.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </Grid>
  );
};

export default TravelSuburbField;
