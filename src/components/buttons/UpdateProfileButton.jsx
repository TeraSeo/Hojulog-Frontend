import { Box, Button } from "@mui/material";
import React from "react";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { useNavigate } from "react-router-dom";

const UpdateProfileButton = ({ userId }) => {
    const navigate = useNavigate();

    return <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
            variant="outlined"
            sx={{
                mt: 1,
                width: ButtonWidthSize1, 
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0, 
            }}
            onClick={() => navigate(`/update/mypage/${userId}`)}
        >
            내 정보 수정
        </Button>
    </Box>;
}

export default UpdateProfileButton;