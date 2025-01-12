import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const RemovePostButton = ({ postId }) => {
    return (
        <Button
            variant="contained"
            color="error"
            sx={{
                width: ButtonWidthSize1,
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0
            }}
        >
            삭제
        </Button>
    );
}

export default RemovePostButton;