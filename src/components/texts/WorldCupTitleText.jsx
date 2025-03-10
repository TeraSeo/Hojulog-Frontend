import { Box, Typography } from "@mui/material";
import React from "react";
import { PostTitleFontSize2 } from "../../constant/FontSizeResponsive";

const WorldCupTitltText = ({ title }) => {
    return <Box>
        <Typography
            variant="body2"
            sx={{
                fontSize: PostTitleFontSize2,
                fontWeight: "600",
                textAlign: "start",
                whiteSpace: "normal", 
                wordBreak: "break-word", 
                overflow: "hidden",   
                width: "100%",        
            }}
            >
            {title || "No Title Available"}
        </Typography>
    </Box>
}

export default WorldCupTitltText;