import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem } from "@mui/material";

const PostVisibleField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        게시물 공개 여부 선택
      </Typography>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value === true)}
          displayEmpty
        >
          <MenuItem value={true}>공개</MenuItem>
          <MenuItem value={false}>비공개</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default PostVisibleField;
