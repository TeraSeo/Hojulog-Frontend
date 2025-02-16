import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, MenuItem, Select, FormControl, InputLabel, Typography, Stack, Chip } from "@mui/material";
import { categories } from "../../constant/Categories";
import { suburbs } from "../../constant/\bSuburb";
import { jobKeyWords, propertyKeyWords, societyKeyWords, studyKeyWords, transactionKeyWords, travelKeyWords } from "../../constant/Keywords";

const keywordMapping = {
    "부동산": propertyKeyWords,
    "구인구직": jobKeyWords,
    "사고팔기": transactionKeyWords,
    "생활": societyKeyWords,
    "여행": travelKeyWords,
    "유학": studyKeyWords
};

function SearchDialog({ open, onClose }) {
    const [title, setTitle] = useState("");
    const [selectedSuburb, setSelectedSuburb] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedSubCategory("");
        setSelectedKeywords([]);
    };

    const handleKeywordToggle = (keyword) => {
        setSelectedKeywords((prevKeywords) =>
            prevKeywords.includes(keyword)
                ? prevKeywords.filter((k) => k !== keyword)
                : [...prevKeywords, keyword]
        );
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            fullWidth 
            maxWidth="sm"
            sx={{ 
                "& .MuiPaper-root": { borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" } 
            }}
        >
            <DialogTitle sx={{ fontWeight: 700, fontSize: "20px", textAlign: "center" }}>
                게시물 검색
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
                {/* Title Field */}
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }}
                    />
                </Box>

                {/* Suburb Select Box */}
                <Box sx={{ mb: 2 }}>
                    <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }}>
                        <InputLabel>지역</InputLabel>
                        <Select
                            value={selectedSuburb}
                            onChange={(e) => setSelectedSuburb(e.target.value)}
                            label="지역"
                        >
                            {suburbs.map((suburb) => (
                                <MenuItem key={suburb} value={suburb}>
                                    {suburb}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* Category & Sub-Category in One Row */}
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }}>
                        <InputLabel>카테고리</InputLabel>
                        <Select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            label="카테고리"
                        >
                            {Object.keys(categories).map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth variant="outlined" disabled={!selectedCategory} sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }}>
                        <InputLabel>세부 카테고리</InputLabel>
                        <Select
                            value={selectedSubCategory}
                            onChange={(e) => setSelectedSubCategory(e.target.value)}
                            label="세부 카테고리"
                        >
                            {selectedCategory &&
                                categories[selectedCategory].map((subCategory) => (
                                    <MenuItem key={subCategory} value={subCategory}>
                                        {subCategory}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* Keywords (Chip Selection) */}
                {selectedCategory && (
                    <Box sx={{ mb: 2, backgroundColor: "#fafafa", p: 2, borderRadius: "8px" }}>
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, textAlign: "start", fontSize: "14px", mb: 2, color: "#555" }}
                        >
                            키워드
                        </Typography>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {keywordMapping[selectedCategory].map((keyword) => (
                                <Chip
                                    key={keyword}
                                    label={keyword}
                                    onClick={() => handleKeywordToggle(keyword)}
                                    sx={{
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        borderRadius: "16px",
                                        backgroundColor: selectedKeywords.includes(keyword) ? "#1976d2" : "#e0e0e0",
                                        color: selectedKeywords.includes(keyword) ? "#fff" : "#555",
                                        cursor: "pointer",
                                        "&:hover": { backgroundColor: selectedKeywords.includes(keyword) ? "#1565c0" : "#d6d6d6" }
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                )}

                {/* Action Buttons */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                    <Button 
                        onClick={onClose} 
                        sx={{ 
                            color: "#555", 
                            fontWeight: "bold", 
                            "&:hover": { backgroundColor: "#f0f0f0" } 
                        }}
                    >
                        취소
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ 
                            fontWeight: "bold", 
                            borderRadius: "8px", 
                            px: 4, 
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                            "&:hover": { backgroundColor: "#1565c0" }
                        }}
                    >
                        검색
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default SearchDialog;
