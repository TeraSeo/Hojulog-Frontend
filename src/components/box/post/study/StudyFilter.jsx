import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";

const StudyFilter = ({
  selectedSortOption,
  setSelectedSortOption,
  applyFilters
}) => {
  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="sort-label">정렬</InputLabel>
        <Select
          labelId="sort-label"
          value={selectedSortOption}
          onChange={handleSortChange}
          label="정렬"
        >
          <MenuItem value="최신순">최신순</MenuItem>
          <MenuItem value="좋아요순">좋아요순</MenuItem>
          <MenuItem value="조회수순">조회수순</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" sx={{ background: primaryColor }} onClick={applyFilters}>
        필터 적용
      </Button>
    </Box>
  );
};

export default StudyFilter;