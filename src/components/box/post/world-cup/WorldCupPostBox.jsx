import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import NormalPostImageBox from "../NormalPostImageBox";
import SubCatoryText from "../../../texts/SubCatoryText";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";
import ResponsivePinnedChip from "../../../texts/ResponsivePinnedChip";
import ViewCountsText from "../../../texts/ViewCountsText";
import { SummarizedPostIconResponsiveSize1 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";

const WorldCupPostBox = ({ post }) => {
    const isPinned = post.pinnedAdExpiry && new Date(post.pinnedAdExpiry) > new Date();

    return (
        <Box
            sx={{
                display: "flex",
                mt: 1
            }}
        >
            <Box sx={{ width: PostImageWidthResponiveSize, flexShrink: 0 }}>
                <NormalPostImageBox imageUrl={post.imageUrl} title={post.title} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1, minWidth: 0 }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        minWidth: 0
                    }}>
                        <Box>
                            <Box sx={{ ml: 1, mb: 0.5 }}>
                                <ResponsivePinnedChip isPinned={isPinned} />
                            </Box>
                            <Box sx={{ display: "flex", "&:hover": { color: "primary.main", textDecoration: "underline", transform: "scale(1.02)", cursor: "pointer" }}}>
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
                        </Box>
                        
                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <ViewCountsText viewCounts={post.viewCounts} width={SummarizedPostIconResponsiveSize1} height={SummarizedPostIconResponsiveSize1} fontSize={PostResponsiveFontSize2} />
                        </Box>
                    </Box>
            </Box>
        </Box>
    );
};

export default WorldCupPostBox;