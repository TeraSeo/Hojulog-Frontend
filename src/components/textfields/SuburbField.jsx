import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem } from "@mui/material";

const SuburbField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        지역 선택
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="지역을 선택하세요"
        >
          <MenuItem value="시드니">시드니</MenuItem>
          <MenuItem value="멜버른">멜버른</MenuItem>
          <MenuItem value="브리즈번">브리즈번</MenuItem>
          <MenuItem value="골드코스트">골드코스트</MenuItem>
          <MenuItem value="캔버라">캔버라</MenuItem>
          <MenuItem value="애들레이드">애들레이드</MenuItem>
          <MenuItem value="퍼스">퍼스</MenuItem>
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

export default SuburbField;