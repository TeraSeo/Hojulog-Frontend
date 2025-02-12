import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SummarizedDescriptionText from "../../../texts/SummarizedDescriptionText";
import HomePostLikeCountsText from "../../../texts/HomePostLikeCountsText";
import HomePostCommentCountsText from "../../../texts/HomePostCommentCountsText";
import HomePostViewCountsText from "../../../texts/HomePostViewCountsText";

const TravelPostBox = ({ post }) => {
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
                px: { md: 2.5, xs: 2 },
                py: { md: 2.5, xs: 1.5 }
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
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
                                <SummarizedPostTitleText title={post.title} postId={post.postId} category={"여행"} pl={0} />
                                <SummarizedDescriptionText description={post.description} pl={0} />
                            </Box>

                            <Box sx={{ ml: 1 }}>
                                <LocationButton location={post.location} />
                            </Box>
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

export default TravelPostBox;
