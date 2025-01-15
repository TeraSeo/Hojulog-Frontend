import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PostResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const SubCatoryText = ({ subCategory, postId, category, pt=1 }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (postId) {
            navigate(`/post/${category}/detail/${postId}`);
        }
    };
    
    return <Typography
        variant="body2"
        onClick={handleClick}
        sx={{
            pt: pt,
            pl: 1,
            fontWeight: "600",
            textAlign: "start",
            whiteSpace: "nowrap",
            fontSize: PostResponsiveFontSize1
        }}
    >
        {subCategory + " | " || ""}
    </Typography>;
}

export default SubCatoryText;