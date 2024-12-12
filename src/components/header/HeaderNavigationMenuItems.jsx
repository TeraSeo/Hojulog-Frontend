import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderNavigationMenuItems() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
            <Button
                variant="text"
                onClick={() => navigate("/")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                부동산
            </Button>
            <Button
                variant="text"
                onClick={() => navigate("/launch")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                구인구직
            </Button>
            <Button
                variant="text"
                onClick={() => navigate("/about")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                사고팔기
            </Button>
            <Button
                variant="text"
                onClick={() => navigate("/contact")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                동호회
            </Button>
            <Button
                variant="text"
                onClick={() => navigate("/contact")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                여행
            </Button>
            <Button
                variant="text"
                onClick={() => navigate("/contact")}
                sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "16px",
                    "&:hover": {
                        color: "#555",
                    },
                }}
            >
                유학
            </Button>
        </Box>
    );
}

export default HeaderNavigationMenuItems;