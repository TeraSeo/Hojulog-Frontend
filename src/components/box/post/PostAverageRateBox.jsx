import React from "react";
import { Typography, Box, Rating } from "@mui/material";

const PostAverageRateBox = ({ averageRate }) => {
    const formattedRate = (averageRate || 0.0).toFixed(1);

    return (
        <Box sx={{ display: "flex", alignItems: "center", px: 1, pt: 0.3 }}>
            <Rating
                value={parseFloat(formattedRate)}
                precision={0.1}
                readOnly
                size="small"
            />
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
    );
};

export default PostAverageRateBox;
