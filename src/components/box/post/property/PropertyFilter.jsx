import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";

const PropertyFilter = ({ filters, setFilters, applyFilters, priceError, setPriceError, isPeriodContained = true, selectedSortOption, setSelectedSortOption, }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        let updatedFilters = { ...filters, [name]: value };

        // Validate Price Range
        if (name === "minPrice" && updatedFilters.maxPrice !== "" && Number(value) > Number(updatedFilters.maxPrice)) {
            setPriceError("최소 가격은 최대 가격보다 클 수 없습니다.");
        } else if (name === "maxPrice" && updatedFilters.minPrice !== "" && Number(value) < Number(updatedFilters.minPrice)) {
            setPriceError("최대 가격은 최소 가격보다 작을 수 없습니다.");
        } else {
            setPriceError("");
        }

        setFilters(updatedFilters);
    };

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

            {/* Price Range Filter */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <TextField
                    label="최소 가격"
                    variant="outlined"
                    size="small"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    type="number"
                    sx={{
                        width: { xs: "70px", sm: "100px", md: "140px" }, // Responsive field width
                    }}
                    InputLabelProps={{
                        sx: {
                            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive label size
                        },
                    }}
                    inputProps={{
                        sx: {
                            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive input text size
                        },
                    }}
                    FormHelperTextProps={{
                        sx: {
                            fontSize: { xs: "0.5rem", sm: "0.7rem", md: "0.9rem" }, // Responsive error text size
                        },
                    }}
                />
                <Typography>~</Typography>
                <TextField
                    label="최대 가격"
                    variant="outlined"
                    size="small"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    type="number"
                    sx={{
                        width: { xs: "70px", sm: "100px", md: "140px" }, // Responsive field width
                    }}
                    InputLabelProps={{
                        sx: {
                            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive label size
                        },
                    }}
                    inputProps={{
                        sx: {
                            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive input text size
                        },
                    }}
                    FormHelperTextProps={{
                        sx: {
                            fontSize: { xs: "0.5rem", sm: "0.7rem", md: "0.9rem" }, // Responsive error text size
                        },
                    }}
                />
            </Box>

            {/* Period Filter */}
            { isPeriodContained && <FormControl 
                size="small" 
                sx={{
                    width: { xs: "80px", sm: "100px", md: "120px" }, // Adjust width of select field
                }}
            >
                <InputLabel 
                    id="period-label"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                >
                    기간
                </InputLabel>
                <Select
                    labelId="period-label"
                    name="period"
                    value={filters.period}
                    onChange={handleFilterChange}
                    label="기간"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive menu item size
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
                    <MenuItem 
                        value="주" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        주
                    </MenuItem>
                    <MenuItem 
                        value="월" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        월
                    </MenuItem>
                    <MenuItem 
                        value="년" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        년
                    </MenuItem>
                </Select>
            </FormControl> }

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

export default PropertyFilter;
