import React from "react";
import { Typography, Box, Rating } from "@mui/material";

const PostRateBox = ({ rate, px=1 }) => {
    const formattedRate = (rate || 0.0).toFixed(1);

    return (
        <Box sx={{ display: "flex", alignItems: "center", px: px, pt: 0.3 }}>
            <Rating
                value={parseFloat(formattedRate)}
                precision={0.1}
                readOnly
                size="small"
            />
            <Box sx={{ width: "30px"}}>
                <Typography
                    variant="body2"
                    sx={{
                        ml: 1,
                        fontWeight: "500",
                        color: "text.secondary",
                    }}
                >
                    {formattedRate}
                </Typography>
            </Box>
        </Box>
    );
};

export default PostRateBox;
