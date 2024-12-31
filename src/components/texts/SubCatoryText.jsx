import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SubCatoryText = ({ subCategory, postId, category }) => {
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
            pt: 1,
            pl: 1,
            fontWeight: "600",
            textAlign: "start",
            whiteSpace: "nowrap",
        }}
    >
        {subCategory + " | " || ""}
    </Typography>;
}

export default SubCatoryText;