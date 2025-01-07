import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };

    return (
        <Button
            variant="contained"
            color="primary"
            sx={{
                width: ButtonWidthSize1,
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0
            }}
            onClick={() => handleLogout()}
        >
            로그아웃
        </Button>
    );
}

export default LogoutButton;