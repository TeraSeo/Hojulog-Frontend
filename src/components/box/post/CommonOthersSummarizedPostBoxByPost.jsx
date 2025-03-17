import { Box } from "@mui/material";
import React from "react";
import CreatedAtText from "../../texts/CreatedAtText";
import SummarizedOwnPostTitleText from "../../texts/SummarizedOwnPostTitleText";

const CommonOthersSummarizedPostBoxByPost = ({ post }) => {
    return (
        <Box
            sx={{
                mt: 1.5,
                overflow: "hidden",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                pl: 1.5,
                pr: 2.5,
                py: 2
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flex: 1,
                        overflow: "hidden",
                    }}
                >
                    <Box>
                        <Box sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            <SummarizedOwnPostTitleText title={post.title} postId={post.id} category={post.category} />
                        </Box>

                        <Box>
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CommonOthersSummarizedPostBoxByPost;