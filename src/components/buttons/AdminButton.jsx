import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

const AdminButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="outlined"
            sx={{
                width: ButtonWidthSize1,
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0
            }}
            onClick={() => { navigate("/admin") }}
        >
            관리자 페이지
        </Button>
    );
}

export default AdminButton;