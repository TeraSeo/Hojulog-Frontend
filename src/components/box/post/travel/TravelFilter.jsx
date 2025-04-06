import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";
import { travelSuburbs } from "../../../../constant/Countries";

const TravelFilter = ({
  selectedTravelSuburb,
  setSelectedTravelSuburb,
  selectedSortOption,
  setSelectedSortOption,
  applyFilters
}) => {
  const handleTravelSuburbChange = (e) => {
    setSelectedTravelSuburb(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
      <FormControl 
        size="small"
        sx={{
          width: { xs: "80px", sm: "100px", md: "140px" }, // 반응형 너비
        }}
      >
        <InputLabel 
          id="suburb-label"
          sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // 반응형 라벨
        >
          지역
        </InputLabel>
        <Select
          labelId="suburb-label"
          value={selectedTravelSuburb}
          onChange={handleTravelSuburbChange}
          label="지역"
          sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // 반응형 셀렉트 텍스트
          MenuProps={{
            PaperProps: {
              sx: {
                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // 드롭다운 항목 텍스트
              },
            },
          }}
        >
          <MenuItem 
            value="전체" 
            sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
          >
            전체
          </MenuItem>
          {travelSuburbs.map((suburb, index) => (
            <MenuItem 
              key={index} 
              value={suburb}
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
            >
              {suburb}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl 
          size="small"
          sx={{
              width: { xs: "80px", sm: "100px", md: "140px" },
          }}
          >
          <InputLabel 
              id="sort-label"
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
          >
              정렬
          </InputLabel>
          <Select
              labelId="sort-label"
              value={selectedSortOption}
              onChange={handleSortChange}
              label="정렬"
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
              MenuProps={{
              PaperProps: {
                  sx: {
                  fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
                  },
              },
              }}
          >
              <MenuItem 
              value="최신순"
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
              >
              최신순
              </MenuItem>
              <MenuItem 
              value="좋아요순"
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
              >
              좋아요순
              </MenuItem>
              <MenuItem 
              value="조회수순"
              sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
              >
              조회수순
              </MenuItem>
          </Select>
      </FormControl>

      <Button 
                      variant="contained" 
                      sx={{ 
                          background: primaryColor,
                          fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive button text
                          minWidth: { xs: "50px", sm: "80px", md: "90px" }, // Adjust button width
                      }}
                      onClick={applyFilters}
                  >
                      적용
                  </Button>
    </Box>
  );
};

export default TravelFilter;