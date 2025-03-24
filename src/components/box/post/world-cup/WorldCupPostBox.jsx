import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import NormalPostImageBox from "../NormalPostImageBox";
import SubCatoryText from "../../../texts/SubCatoryText";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";
import ResponsivePinnedChip from "../../../texts/ResponsivePinnedChip";
import KeywordBox from "../KeywordBox";
import HomePostLikeCountsText from "../../../texts/HomePostLikeCountsText";
import HomePostCommentCountsText from "../../../texts/HomePostCommentCountsText";
import HomePostViewCountsText from "../../../texts/HomePostViewCountsText";
import RankingButton from "../../../buttons/RankingButton";

const WorldCupPostBox = ({ post }) => {
    const isPinned = post.pinnedAdExpiry && new Date(post.pinnedAdExpiry) > new Date();

    return (
        <Box sx={{ display: "flex", mt: 1 }}>
            <Box sx={{ width: PostImageWidthResponiveSize, flexShrink: 0 }}>
                <NormalPostImageBox imageUrl={post.imageUrl} title={post.title} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ ml: 1, mb: 0.5 }}>
                    <ResponsivePinnedChip isPinned={isPinned} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        minWidth: 0,
                        gap: 1,
                    }}
                >
                    {/* 왼쪽: 텍스트 정보 */}
                    <Box sx={{ flexGrow: 1, minWidth: 0, maxWidth: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    color: "primary.main",
                                    textDecoration: "underline",
                                    transform: "scale(1.02)",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <SubCatoryText subCategory={post.subCategory} postId={post.postId} category={"이상형월드컵"} pt={0} />
                            <SummarizedPostTitleText title={post.title} pl={0.5} postId={post.postId} category={"이상형월드컵"} pt={0} />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>

                        <Box sx={{ overflow: "hidden", maxWidth: "100%", minWidth: 0 }}>
                            <KeywordBox keywords={post.keywords} />
                        </Box>
                    </Box>

                    {/* 오른쪽: 버튼 */}
                    <Box sx={{ flexShrink: 0 }}>
                        <RankingButton worldCupPostId={post.postId} />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1, justifyContent: "end", mt: 1 }}>
                    <HomePostLikeCountsText likeCounts={post.likeCounts} />
                    <HomePostCommentCountsText
                        isCommentAllowed={post.isCommentAllowed}
                        commentsCounts={post.commentCounts}
                        postId={post.postId}
                    />
                    <HomePostViewCountsText viewCounts={post.viewCounts} />
                </Box>
            </Box>
        </Box>
    );
};

export default WorldCupPostBox;
