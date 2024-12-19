import React from "react";
import { Typography, Box } from "@mui/material";
import PostAverageRateBox from "../PostAverageRateBox";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import SummarizedPostImageBox from "../SummarizedPostImageBox";
import CreatedAtText from "../../../texts/CreatedAtText";

const HomeSummarizedTransactionPropertyBox = ({ post }) => {
    return (
        <Box>
            <SummarizedPostImageBox imageUrl={post.imageUrl} title={post.title} />

            <Box sx={{ width: "200px" }}>
                <SummarizedPostTitleText title={post.title} />

                <Typography
                    variant="body2"
                    sx={{
                        pt: 2,
                        px: 1,
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
                    {post.username || "No username Available"}
                </Typography>
                <PostAverageRateBox averageRate={post.averageRate} />
                
                <CreatedAtText createdAt={post.createdAt} />
            </Box>
        </Box>
    );
}

export default HomeSummarizedTransactionPropertyBox;