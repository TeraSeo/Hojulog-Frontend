import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SummarizedDescriptionText from "../../../texts/SummarizedDescriptionText";
import HomePostLikeCountsText from "../../../texts/HomePostLikeCountsText";
import HomePostCommentCountsText from "../../../texts/HomePostCommentCountsText";
import HomePostViewCountsText from "../../../texts/HomePostViewCountsText";
import ResponsivePinnedChip from "../../../texts/ResponsivePinnedChip";

const SocietyPostBox = ({ post }) => {
    const isPinned = post.pinnedAdExpiry && new Date(post.pinnedAdExpiry) > new Date();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1.5,
                overflow: "hidden",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                px: { md: 2.5, sm: 2, xs: 1.5 },
                py: { md: 3, xs: 2.5 },
                backgroundColor: isPinned ? "#fff8e1" : "white",
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                        overflow: "hidden",
                    }}
                >
                    <Box>
                        <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
                            <ResponsivePinnedChip isPinned={isPinned} />
                            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"생활"} pt={1} pl={0} />
                            <SummarizedDescriptionText description={post.description} pl={0} />
                        </Box>

                        <Box
                            sx={{
                                pt: 0.5,
                                display: "flex",
                                textOverflow: "ellipsis",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box sx={{ display: "flex", pr: 1 }}>
                                <CreatedAtText createdAt={post.createdAt} pl={0} />
                            </Box>

                            <Box sx={{ display: "flex", gap: 1 }}>
                                <HomePostLikeCountsText likeCounts={post.likeCounts} />
                                <HomePostCommentCountsText isCommentAllowed={post.isCommentAllowed} commentsCounts={post.commentCounts} postId={post.postId} />
                                <HomePostViewCountsText viewCounts={post.viewCounts} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SocietyPostBox;
