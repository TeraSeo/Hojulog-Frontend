import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import PriceText from "../../../texts/PriceText";
import NormalPostImageBox from "../NormalPostImageBox";
import PeriodText from "../../../texts/PeriodText";
import RoomCountsText from "../../../texts/RoomCountsText";
import BathRoomTypeText from "../../../texts/BathRoomTypeText";
import ParkAvailabilityText from "../../../texts/ParkAvailabilityText";
import BillIncludedText from "../../../texts/BillIncludedText";
import SubCatoryText from "../../../texts/SubCatoryText";

const PropertyPostBox = ({ post }) => {
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
                <NormalPostImageBox imageUrl={post.imageUrl} title={post.title} />
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
                        }, }}>
                            <SubCatoryText subCategory={post.subCategory} postId={post.postId} category={"부동산"} />
                            <SummarizedPostTitleText title={post.title} pl={0.5} postId={post.postId} category={"부동산"} />
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
        </Box>
    );
};

export default PropertyPostBox;
