import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { travelKeyWords } from "../../constant/Keywords";
import { primaryColor } from "../../constant/Color";

const TravelKeyWordField = ({ selectedKeywords, error, onChange }) => {
  
    const handleToggleKeyword = (keyword) => {
        const updatedSelection = selectedKeywords.includes(keyword)
            ? selectedKeywords.filter((k) => k !== keyword) 
            : [...selectedKeywords, keyword]; 
        
            onChange(updatedSelection);
    };
  
    return (
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ color: primaryColor }} gutterBottom>
            선택한 키워드
        </Typography>

        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: 2,
                p: 1,
                border: "1px solid #1976d2", 
                borderRadius: "5px", 
            }}
            >
            {selectedKeywords.map((keyword) => (
                <Chip 
                key={keyword} 
                label={keyword} 
                onDelete={() => handleToggleKeyword(keyword)} 
                color="primary"
                />
            ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {travelKeyWords.map((keyword) => (
            <Chip
              key={keyword}
              label={keyword}
              variant={selectedKeywords.includes(keyword) ? "filled" : "outlined"}
              color={selectedKeywords.includes(keyword) ? "primary" : "default"}
              onClick={() => handleToggleKeyword(keyword)}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>

        {error && <Typography color="error" sx={{ pt: 1 }}>{error}</Typography>}
      </Grid>
    );
  };
  
  export default TravelKeyWordField;