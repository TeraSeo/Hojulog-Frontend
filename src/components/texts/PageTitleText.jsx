import { Typography } from "@mui/material";
import React from "react";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const PageTitleText = ({ title }) => {
    return (
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, fontSize: TitleResponsiveFontSize1 }}>
            { title }
        </Typography>
    );
}

export default PageTitleText;