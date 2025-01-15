import { Box, Typography } from "@mui/material";
import React from "react";
import { PostResponsiveFontSize1, SubTitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const PostDescriptionText = ({ description }) => {
    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: "600",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: SubTitleResponsiveFontSize1
                }}
            >
                설명
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontWeight: "400",
                    textAlign: "start",
                    pt: 1,
                    whiteSpace: "pre-line",
                    wordWrap: "break-word",
                    overflow: "auto",
                    width: "100%",
                    fontSize: PostResponsiveFontSize1
                }}
            >
                { description }
            </Typography>
        </Box>
    );
}

export default PostDescriptionText;