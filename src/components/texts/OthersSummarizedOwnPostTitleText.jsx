import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PostResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const OthersSummarizedOwnPostTitleText = ({ title, pl = 1, postId, category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (postId) {
            // const urlCategory = ConvertCateogryToUrlCategory(category);
            navigate(`/others/post/${category}/detail/${postId}`);
        }
    };

    return (
         <Typography
            variant="body2"
            onClick={handleClick}
            sx={{
                pt: 1,
                pl: pl,
                fontWeight: "600",
                textAlign: "start",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "color 0.3s, transform 0.3s",
                fontSize: PostResponsiveFontSize1,
                "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                    transform: "scale(1.02)",
                    cursor: "pointer",
                },
            }}
        >
            {title || "No Title Available"}
        </Typography>
    );
};

export default OthersSummarizedOwnPostTitleText;