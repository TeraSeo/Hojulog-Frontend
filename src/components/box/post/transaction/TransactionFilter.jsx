import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import React from "react";
import { primaryColor } from "../../../../constant/Color";

const TransactionFilter = ({ filters, setFilters, selectedSortOption, setSelectedSortOption, applyFilters }) => {
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
                    width: { xs: "80px", sm: "100px", md: "140px" }, // Responsive width
                }}
            >
                <InputLabel 
                    id="transaction-type-label"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive label text
                >
                    거래 유형
                </InputLabel>
                <Select
                    labelId="transaction-type-label"
                    name="transactionType"
                    value={filters.transactionType}
                    onChange={handleFilterChange}
                    label="거래 유형"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive dropdown text
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive menu item text
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
                        value="구매" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        구매
                    </MenuItem>
                    <MenuItem 
                        value="판매" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        판매
                    </MenuItem>
                </Select>
            </FormControl>

            {/* Price Type Filter */}
            <FormControl 
                size="small"
                sx={{
                    width: { xs: "80px", sm: "100px", md: "140px" }, // Responsive width
                }}
            >
                <InputLabel 
                    id="price-type-label"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive label text
                >
                    가격 여부
                </InputLabel>
                <Select
                    labelId="price-type-label"
                    name="priceType"
                    value={filters.priceType}
                    onChange={handleFilterChange}
                    label="가격 여부"
                    sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }} // Responsive dropdown text
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive menu item text
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
                        value="무료" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        무료
                    </MenuItem>
                    <MenuItem 
                        value="유료" 
                        sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
                    >
                        유료
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

export default TransactionFilter;
