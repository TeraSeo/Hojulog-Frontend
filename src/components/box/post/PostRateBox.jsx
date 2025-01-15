import React from "react";
import { Typography, Box, Rating } from "@mui/material";
import { ReviewIconResponsiveSize } from "../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../constant/FontSizeResponsive";

const PostRateBox = ({ rate, px=1 }) => {
    const formattedRate = (rate || 0.0).toFixed(1);

    return (
        <Box sx={{ display: "flex", alignItems: "center", px: px, pt: 0.3 }}>
            <Rating
                value={parseFloat(formattedRate)}
                precision={0.1}
                readOnly
                sx={{ fontSize: ReviewIconResponsiveSize }}
            />
            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        ml: 1,
                        fontWeight: "500",
                        color: "text.secondary",
                        fontSize: PostResponsiveFontSize2
                    }}
                >
                    {formattedRate}
                </Typography>
            </Box>
        </Box>
    );
};

export default PostRateBox;
