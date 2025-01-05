import React from "react";
import { Typography } from "@mui/material";

const PreviewSubCategoryText = ({ subCategory }) => {
    return <Typography
        variant="body2"
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

export default PreviewSubCategoryText;