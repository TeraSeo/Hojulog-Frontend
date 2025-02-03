import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem } from "@mui/material";

const CommentAvailabilityField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        댓글 달기
      </Typography>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value === true)}
          displayEmpty
        >
          <MenuItem value={true}>가능</MenuItem>
          <MenuItem value={false}>불가능</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default CommentAvailabilityField;
