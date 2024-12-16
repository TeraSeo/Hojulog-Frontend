import { Box, Typography } from "@mui/material";
import React from "react";
import PostAverageRateBox from "../PostAverageRateBox";

const HomeSummarizedJobBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", pr: 2 }}>
        <Typography
            variant="body2"
            sx={{
                pt: 1,
                fontWeight: "500",
                textAlign: "start",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "color 0.3s, transform 0.3s",
                "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                    transform: "scale(1.02)",
                    cursor: "pointer",
                },
            }}
        >
            {post.title || "No Title Available"}
        </Typography>

        <PostAverageRateBox averageRate={post.averageRate} />
    </Box>;
}

export default HomeSummarizedJobBox;