import { Box } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../../texts/CreatedAtText";
import SuburbText from "../../../texts/SuburbText";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import ViewCountsText from "../../../texts/ViewCountsText";
import PreviewTitleText from "../../../texts/preview/PreviewTitleText";
import EditTransactionDetailedPreviewDialog from "../../../preview/transaction/EditTransactionDetailedPreviewDialog";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";
import PriceText from "../../../texts/PriceText";
import FreeText from "../../../texts/\bFreeText";
import { SummarizedPostIconResponsiveSize1 } from "../../../../constant/IconSizeResponsive";
import EditPreviewImageBox from "../../../preview/EditPreviewImageBox";

const EditPreviewTransactionPostBox = ({ post, mediaData, subCategory, existingImages=[] }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Box
            sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                px: { md: 2.5, sm: 2, xs: 1.5 },
                py: { md: 3, sm: 2, xs: 1.5 }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box sx={{ width: PostImageWidthResponiveSize, flexShrink: 0 }}>
                    <EditPreviewImageBox images={mediaData.newImages} existingImages={existingImages} title={post.title} />
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

            <EditTransactionDetailedPreviewDialog open={dialogOpen} onClose={handleCloseDialog} post={post} mediaData={mediaData} subCategory={subCategory} existingImages={existingImages} />
        </Box>
    );
};

export default EditPreviewTransactionPostBox;