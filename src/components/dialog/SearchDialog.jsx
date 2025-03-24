import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, MenuItem, Select, FormControl, InputLabel, Typography, Stack, Chip, FormHelperText } from "@mui/material";
import { categories } from "../../constant/Categories";
import { suburbs } from "../../constant/\bSuburb";
import { jobKeyWords, propertyKeyWords, societyKeyWords, studyKeyWords, transactionKeyWords, travelKeyWords, worldCupJobKeyWords, worldCupPropertyKeyWords, worldCupSocietyKeyWords, worldCupStudyKeyWords, worldCupTransactionKeyWords, worldCupTravelKeyWords } from "../../constant/Keywords";
import { useNavigate } from "react-router-dom";

const keywordMapping = {
    "부동산": propertyKeyWords,
    "구인구직": jobKeyWords,
    "사고팔기": transactionKeyWords,
    "생활": societyKeyWords,
    "여행": travelKeyWords,
    "유학": studyKeyWords,
    "Aussie Choice": {
        "부동산": worldCupPropertyKeyWords,
        "구인구직": worldCupJobKeyWords,
        "사고팔기": worldCupTransactionKeyWords,
        "생활": worldCupSocietyKeyWords,
        "여행": worldCupTravelKeyWords,
        "워홀/유학": worldCupStudyKeyWords,
        "자유": []
    }
};

// Categories that require the suburb field
const categoriesWithSuburb = ["부동산", "구인구직", "사고팔기"];

function SearchDialog({ open, onClose }) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [selectedSuburb, setSelectedSuburb] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [categoryError, setCategoryError] = useState(false);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedSubCategory("");
        setSelectedSuburb(""); // Reset suburb when category changes
        setSelectedKeywords([]);
        setCategoryError(false);
    };

    const handleKeywordToggle = (keyword) => {
        setSelectedKeywords((prevKeywords) =>
            prevKeywords.includes(keyword)
                ? prevKeywords.filter((k) => k !== keyword)
                : [...prevKeywords, keyword]
        );
    };

    const handleSearch = () => {
        if (!selectedCategory) {
            setCategoryError(true);
            return;
        }

        const keywordsParam = selectedKeywords.length > 0 ? selectedKeywords.join(",") : "none";
        const titleParam = title ? encodeURIComponent(title) : "none";
        const suburbParam = selectedSuburb ? encodeURIComponent(selectedSuburb) : "none";
        let subCategoryParam = selectedSubCategory ? encodeURIComponent(selectedSubCategory) : "none";
        if (selectedSubCategory.includes("레스토랑")) subCategoryParam = encodeURIComponent("레스토랑");
        else if (selectedSubCategory.includes("워홀/유학")) subCategoryParam = encodeURIComponent("유학");


        if (selectedCategory === "Aussie Choice") {
            const searchUrl = `/search/${encodeURIComponent("이상형월드컵")}/${titleParam}/${suburbParam}/${subCategoryParam}/${keywordsParam}`;
            onClose();
            navigate(searchUrl);
        }
        else if (selectedCategory === "워홀/유학") {
            const searchUrl = `/search/${encodeURIComponent("유학")}/${titleParam}/${suburbParam}/${subCategoryParam}/${keywordsParam}`;
            onClose();
            navigate(searchUrl);
        }
        else {
            const searchUrl = `/search/${encodeURIComponent(selectedCategory)}/${titleParam}/${suburbParam}/${subCategoryParam}/${keywordsParam}`;
            onClose();
            navigate(searchUrl);
        }
    };

    const getKeywordsForCategory = () => {
        if (selectedCategory === "Aussie Choice") {
            return selectedSubCategory ? keywordMapping["Aussie Choice"][selectedSubCategory] : [];
        }
        return keywordMapping[selectedCategory] || [];
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            fullWidth 
            maxWidth="sm"
            sx={{ "& .MuiPaper-root": { borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" } }}
        >
            <DialogTitle sx={{ fontWeight: 700, fontSize: "20px", textAlign: "center" }}>
                게시물 검색
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
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

                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <FormControl 
                        fullWidth 
                        variant="outlined" 
                        sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }} 
                        error={categoryError}
                    >
                        <InputLabel>카테고리 *</InputLabel>
                        <Select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            label="카테고리 *"
                        >
                            {Object.keys(categories).map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                        {categoryError && <FormHelperText>카테고리를 선택해주세요.</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth variant="outlined" disabled={!selectedCategory} sx={{ backgroundColor: "#fafafa", borderRadius: "8px" }}>
                        <InputLabel>세부 카테고리</InputLabel>
                        <Select
                            value={selectedSubCategory}
                            onChange={(e) => {
                                    setSelectedSubCategory(e.target.value)
                                    if (selectedCategory === "이상형월드컵") {
                                        setSelectedKeywords([]);
                                    }
                                }
                            }
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

                {categoriesWithSuburb.includes(selectedCategory) && (
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
                )}

                {selectedCategory && getKeywordsForCategory().length > 0 && (
                    <Box sx={{ mb: 2, backgroundColor: "#fafafa", p: 2, borderRadius: "8px" }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, textAlign: "start", fontSize: "14px", mb: 2, color: "#555" }}>
                            키워드
                        </Typography>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {getKeywordsForCategory().map((keyword) => (
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

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                    <Button onClick={onClose} sx={{ color: "#555", fontWeight: "bold", "&:hover": { backgroundColor: "#f0f0f0" } }}>
                        취소
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSearch} 
                        disabled={!selectedCategory}
                        sx={{ fontWeight: "bold", borderRadius: "8px", px: 4, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", "&:hover": { backgroundColor: "#1565c0" } }}
                    >
                        검색
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default SearchDialog;
