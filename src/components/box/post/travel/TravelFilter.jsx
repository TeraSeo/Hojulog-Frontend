import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";
import { travelSuburbs } from "../../../../constant/Countries";

const TravelFilter = ({ selectedTravelSuburb, setSelectedTravelSuburb, applyFilters }) => {
    const handleTravelSuburbChange = (e) => {
        setSelectedTravelSuburb(e.target.value);
    };

    return (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="suburb-label">지역</InputLabel>
                <Select
                    labelId="suburb-label"
                    value={selectedTravelSuburb}
                    onChange={handleTravelSuburbChange}
                    label="지역"
                >
                    <MenuItem value="전체">전체</MenuItem>
                    {travelSuburbs.map((suburb, index) => (
                        <MenuItem key={index} value={suburb}>{suburb}</MenuItem>
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