import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";

const JobFilter = ({ filters, setFilters, applyFilters, selectedSortOption, setSelectedSortOption, }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSortChange = (e) => {
        setSelectedSortOption(e.target.value);
    };

    return (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
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

            <FormControl 
                size="small" 
                sx={{
                    width: { xs: "80px", sm: "100px", md: "140px" }, // Responsive field width
                }}
            >
                <InputLabel 
                    id="job-type-label"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive label size
                >
                    근무 형태
                </InputLabel>
                <Select
                    labelId="job-type-label"
                    name="jobType"
                    value={filters.jobType}
                    onChange={handleFilterChange}
                    label="근무 형태"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive dropdown text size
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive dropdown menu item size
                            },
                        },
                    }}
                >
                    <MenuItem 
                        value="전체" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive menu item size
                    >
                        전체
                    </MenuItem>
                    <MenuItem 
                        value="단기알바" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        단기알바
                    </MenuItem>
                    <MenuItem 
                        value="파트타임" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        파트타임
                    </MenuItem>
                    <MenuItem 
                        value="풀타임" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        풀타임
                    </MenuItem>
                </Select>
            </FormControl>

            {/* Apply Filters Button */}
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

export default JobFilter;
