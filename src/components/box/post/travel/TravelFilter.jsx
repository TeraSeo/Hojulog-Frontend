import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import countries from "../../../../constant/Countries";
import { primaryColor } from "../../../../constant/Color";

const TravelFilter = ({ selectedCountry, setSelectedCountry, applyFilters }) => {
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
            {/* Country Filter */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="country-label">국가</InputLabel>
                <Select
                    labelId="country-label"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    label="국가"
                >
                    <MenuItem value="전체">전체</MenuItem>
                    {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>{country}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Apply Filters Button */}
            <Button variant="contained" sx={{ background: primaryColor }} onClick={applyFilters}>
                필터 적용
            </Button>
        </Box>
    );
};

export default TravelFilter;