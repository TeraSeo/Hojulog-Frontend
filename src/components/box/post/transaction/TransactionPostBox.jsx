import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SuburbText from "../../../texts/SuburbText";
import PriceText from "../../../texts/PriceText";
import ViewCountsText from "../../../texts/ViewCountsText";
import NormalPostImageBox from "../NormalPostImageBox";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import { SummarizedPostIconResponsiveSize1 } from "../../../../constant/IconSizeResponsive";
import FreeText from "../../../texts/\bFreeText";
import ResponsivePinnedChip from "../../../texts/ResponsivePinnedChip";

const TransactionPostBox = ({ post }) => {
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

            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                    }}
                >
                    <Box>
                        <Box sx={{ ml: 1 }}><ResponsivePinnedChip isPinned={isPinned} /></Box>
                        <SummarizedPostTitleText title={post.title} postId={post.postId} category={"사고팔기"} pt={0} />
                        <Box
                            sx={{
                                display: "flex",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <SuburbText suburb={post.suburb} />
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>

                        <Box sx={{ px: 1, pt: 0.5 }}>
                            {
                                post.priceType === "유료" ?
                                    <PriceText price={post.price} />:
                                    <FreeText />
                            }
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        {/* <CommentsCountsText commentsCounts={post.commentCounts} width={SummarizedPostIconResponsiveSize1} height={SummarizedPostIconResponsiveSize1} fontSize={PostResponsiveFontSize2} /> */}
                        <ViewCountsText viewCounts={post.viewCounts} width={SummarizedPostIconResponsiveSize1} height={SummarizedPostIconResponsiveSize1} fontSize={PostResponsiveFontSize2} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TransactionPostBox;
