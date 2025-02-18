import { Box } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import { SummarizedPostIconResponsiveSize2 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import ViewCountsText from "../../../texts/ViewCountsText";
import JobDetailedPreviewDialog from "../../../preview/job/JobDetailedPreviewDialog";
import PreviewTitleText from "../../../texts/preview/PreviewTitleText";

const JobPreviewPropertyBox = ({ post, mediaData, subCategory }) => {
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
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    overflow: "hidden",
                }}>
            <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{whiteSpace: "nowrap", minWidth: 0}}>
                            <Box sx={{ display: "flex", "&:hover": {
                                color: "primary.main",
                                textDecoration: "underline",
                                transform: "scale(1.02)",
                                cursor: "pointer",
                            }}} onClick={handleOpenDialog}>
                                <PreviewTitleText title={post.title} pl={0.5} />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    textOverflow: "ellipsis",
                                    mt: 0.5
                                }}
                            >

                                <ViewCountsText viewCounts={0} width={SummarizedPostIconResponsiveSize2} height={SummarizedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} pl={0} />

                                <Box sx={{ display: "flex", pl: 0.5, alignItems: "center" }}>
                                    <SuburbText suburb={post.suburb} />
                                    <CreatedAtText createdAt={post.createdAt} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ ml: 1 }}>
                            <LocationButton location={post.location} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <JobDetailedPreviewDialog open={dialogOpen} onClose={handleCloseDialog} post={post} mediaData={mediaData} subCategory={subCategory} />
        </Box>
    );
};

export default JobPreviewPropertyBox;