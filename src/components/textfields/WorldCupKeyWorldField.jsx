import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { primaryColor } from "../../constant/Color";

const WorldCupKeyWordField = ({ selectedKeywords, error, onChange, availableKeywords }) => {
  
    const handleToggleKeyword = (keyword) => {
        if (selectedKeywords.includes(keyword)) {
            onChange(selectedKeywords.filter((k) => k !== keyword));
        } else {
            if (selectedKeywords.length < 12) {
                onChange([...selectedKeywords, keyword]);
            }
        }
    };

    return (
      <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
        <Typography variant="subtitle1" sx={{ color: primaryColor }} gutterBottom>
            선택한 키워드
        </Typography>

        {/* Selected Keywords */}
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

        {/* Available Keywords */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {availableKeywords.map((keyword) => (
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

export default WorldCupKeyWordField;