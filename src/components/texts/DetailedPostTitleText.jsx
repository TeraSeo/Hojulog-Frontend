import React from "react";
import { Typography } from "@mui/material";

const DetailedPostTitleText = ({ subCategory, title }) => {
    return <Typography
        variant="body2"
        sx={{
        fontSize: {
            xs: "18px",
            sm: "22px",
            md: "27px",
        },
        fontWeight: "400",
        textAlign: "start",
        }}
    >
        {subCategory} | {title || "No Title Available"}
    </Typography>;
}

export default DetailedPostTitleText;