import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const KeywordBox = ({ keywords }) => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    return (
        <Box sx={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
            <Box
                sx={{
                    mt: 1,
                    display: "flex",
                    flexWrap:  "nowrap",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    ml: 1,
                    gap: isSmallScreen ? 0.3 : 0.5,
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {keywords.map((keyword, index) => (
                    <Chip
                        key={index}
                        title={keyword}
                        label={
                            <Typography
                                noWrap
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: isSmallScreen ? 35 : 80, // 최대 너비 제한
                                    fontSize: isSmallScreen ? "6px" : "11px",
                                    fontWeight: 500,
                                }}
                            >
                                {keyword}
                            </Typography>
                        }
                        sx={{
                            backgroundColor: "#f5f5f5",
                            color: "#333",
                            height: isSmallScreen ? 14 : 24,
                            minWidth: isSmallScreen ? 20 : 40,  // 최소 너비
                            flexShrink: 0,
                            paddingX: 1, // 좌우 여백
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default KeywordBox;
