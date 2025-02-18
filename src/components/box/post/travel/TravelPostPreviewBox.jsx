import { Box } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../../texts/CreatedAtText";
import SummarizedDescriptionText from "../../../texts/SummarizedDescriptionText";
import LocationButton from "../../../buttons/LocationButton";
import HomePostLikeCountsText from "../../../texts/HomePostLikeCountsText";
import HomePostCommentCountsText from "../../../texts/HomePostCommentCountsText";
import HomePostViewCountsText from "../../../texts/HomePostViewCountsText";
import TravelPostDetailedPreviewBox from "../../../preview/travel/TravelPostDetailedPreviewBox";
import PreviewTitleText from "../../../texts/preview/PreviewTitleText";

const TravelPostPreviewBox = ({ post, subCategory }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const blogContents = post.blogContents;
    const firstDescription = blogContents?.find(content => content.type === "description")?.content || "";

    return (
        <Box>
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
                                    <Box sx={{ display: "flex", "&:hover": {
                                        color: "primary.main",
                                        textDecoration: "underline",
                                        transform: "scale(1.02)",
                                        cursor: "pointer",
                                    }}} onClick={handleOpenDialog}>
                                        <PreviewTitleText title={post.title} pl={0} />
                                    </Box>
                                    <SummarizedDescriptionText description={firstDescription} pl={0} />
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
                                    <HomePostLikeCountsText likeCounts={0} />
                                    <HomePostCommentCountsText isCommentAllowed={post.isCommentAllowed} commentsCounts={0} postId={post.postId} isDialogAllowed={false} />
                                    <HomePostViewCountsText viewCounts={0} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <TravelPostDetailedPreviewBox open={dialogOpen} onClose={handleCloseDialog} post={post} subCategory={subCategory} />
        </Box>
    );
};

export default TravelPostPreviewBox;