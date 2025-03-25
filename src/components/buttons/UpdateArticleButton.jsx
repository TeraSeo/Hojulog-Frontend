import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

const UpdateArticleButton = ({ postId }) => {
    const navigate = useNavigate();

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
            onClick={() => { navigate(`/update/게시글/${postId}`) }}
        >
            수정
        </Button>
    );
}

export default UpdateArticleButton;