import { Box, Chip, useMediaQuery } from "@mui/material";
import React from "react";

const KeywordBox = ({ keywords }) => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    return (
        <Box
            sx={{
                mt: 1,
                display: "flex",
                flexWrap: isSmallScreen ? "wrap" : "nowrap", // Allow wrapping on small screens
                overflowX: isSmallScreen ? "visible" : "auto", // Enable scrolling only on larger screens
                whiteSpace: "nowrap",
                ml: 1,
                gap: isSmallScreen ? 0.3 : 0.5, // Adjust spacing based on screen size
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" }
            }}
        >
            {keywords.map((keyword, index) => (
                <Chip
                    key={index}
                    label={keyword}
                    sx={{
                        fontSize: isSmallScreen ? "6px" : "11px", // Adjust font size
                        fontWeight: 500,
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                        height: isSmallScreen ? 14 : 24, // Slightly smaller on small screens
                        width: isSmallScreen ? 35 : 50, // Slightly smaller on small screens
                        flexShrink: 0
                    }}
                />
            ))}
        </Box>
    );
};

export default KeywordBox;
