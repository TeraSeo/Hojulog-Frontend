import { Box } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../../texts/CreatedAtText";
import SuburbText from "../../../texts/SuburbText";
import { SummarizedPostIconResponsiveSize1 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import ViewCountsText from "../../../texts/ViewCountsText";
import PreviewTitleText from "../../../texts/preview/PreviewTitleText";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";
import PriceText from "../../../texts/PriceText";
import PreviewPostImageBox from "../../../preview/PreviewPostImageBox";
import TransactionDetailedPreviewDialog from "../../../preview/transaction/TransactionDetailedPreviewDialog";
import FreeText from "../../../texts/\bFreeText";

const TransactionPostPreviewBox = ({ post, mediaData, subCategory }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ width: PostImageWidthResponiveSize, flexShrink: 0 }}>
                    <PreviewPostImageBox images={mediaData.selectedImages} title={post.title} />
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
                            <Box sx={{ display: "flex", "&:hover": {
                                color: "primary.main",
                                textDecoration: "underline",
                                transform: "scale(1.02)",
                                cursor: "pointer",
                            }}} onClick={handleOpenDialog}>
                                <PreviewTitleText title={post.title} pl={1} />
                            </Box>
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
                            <ViewCountsText viewCounts={0} width={SummarizedPostIconResponsiveSize1} height={SummarizedPostIconResponsiveSize1} fontSize={PostResponsiveFontSize2} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <TransactionDetailedPreviewDialog open={dialogOpen} onClose={handleCloseDialog} post={post} mediaData={mediaData} subCategory={subCategory} />
        </Box>
    );
};

export default TransactionPostPreviewBox;