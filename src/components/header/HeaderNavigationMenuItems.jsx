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
                Home
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
                Launch
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
                About
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
                Contact
            </Button>
        </Box>
    );
}

export default HeaderNavigationMenuItems;