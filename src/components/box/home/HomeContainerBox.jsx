import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeContainerBox = ({ title, onDetailClicked, children }) => {
    return (
        <Box
            sx={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                transition: "box-shadow 0.3s ease-in-out",
                border: "0.5px solid #e0e0e0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "13px",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {title}
                </Typography>
                <IconButton
                    onClick={onDetailClicked}
                    size="small"
                    sx={{ color: "#666", fontSize: "14px" }}
                >
                    더보기
                    <ArrowForwardIosIcon sx={{ fontSize: "12px", marginLeft: "4px" }} />
                </IconButton>
            </Box>

            {children}
        </Box>
    );
};

export default HomeContainerBox;