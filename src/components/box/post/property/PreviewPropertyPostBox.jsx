import { Box } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import PriceText from "../../../texts/PriceText";
import PeriodText from "../../../texts/PeriodText";
import RoomCountsText from "../../../texts/RoomCountsText";
import BathRoomTypeText from "../../../texts/BathRoomTypeText";
import ParkAvailabilityText from "../../../texts/ParkAvailabilityText";
import BillIncludedText from "../../../texts/BillIncludedText";
import PreviewTitleText from "../../../texts/preview/PreviewTitleText";
import PreviewSubCategoryText from "../../../texts/preview/PreviewSubCategoryText";
import PreviewPostImageBox from "../../../preview/PreviewPostImageBox";
import PropertyDetailedPreviewDialog from "../../../preview/property/PropertyDetailedPreviewDialog";
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";

const PreviewPropertyPostBox = ({ post, mediaData, subCategory }) => {
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
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                overflow: "hidden",
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Box sx={{ width: PostImageWidthResponiveSize, flexShrink: 0 }}>
                    <PreviewPostImageBox images={mediaData.selectedImages} title={post.title} />
                </Box>
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
                        <Box sx={{ display: "flex", "&:hover": {
                            color: "primary.main",
                            textDecoration: "underline",
                            transform: "scale(1.02)",
                            cursor: "pointer",
                        }}} onClick={handleOpenDialog}>
                            <PreviewSubCategoryText subCategory={subCategory} />
                            <PreviewTitleText title={post.title} pl={0.5} />
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
                            <CreatedAtText createdAt={post.createdAt} pl={0}/>
                        </Box>
                        
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1, pt: 0.5 }}>
                            <RoomCountsText roomCount={post.roomCount} />
                            <BathRoomTypeText bathroomType={post.bathroomType} />
                            <ParkAvailabilityText isParkable={post.isParkable} />
                            <BillIncludedText isBillIncluded={post.isBillIncluded} />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", px: 1, pb: 1 }}>
                        <PeriodText period={post.period} />
                        <PriceText price={post.price} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: 1 }}>
                <LocationButton location={post.location} />
            </Box>

            <PropertyDetailedPreviewDialog open={dialogOpen} onClose={handleCloseDialog} post={post} mediaData={mediaData} subCategory={subCategory} />
        </Box>
    );
};

export default PreviewPropertyPostBox;