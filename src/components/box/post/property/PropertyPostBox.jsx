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
import { PostImageWidthResponiveSize } from "../../../../constant/ComponentSizeResponsive";

const PropertyPostBox = ({ post }) => {
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
                            <Box sx={{ display: "flex", "&:hover": { color: "primary.main", textDecoration: "underline", transform: "scale(1.02)", cursor: "pointer" }}}>
                                <SubCatoryText subCategory={post.subCategory} postId={post.postId} category={"부동산"} pt={0} />
                                <SummarizedPostTitleText title={post.title} pl={0.5} postId={post.postId} category={"부동산"} pt={0} />
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
                            
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    pl: 1,
                                    pt: 0.5,
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    scrollbarWidth: "none",
                                    "&::-webkit-scrollbar": {
                                        display: "none"
                                    },
                                }}
                            >
                                <RoomCountsText roomCount={post.roomCount} />
                                <BathRoomTypeText bathroomType={post.bathroomType} />
                                <ParkAvailabilityText isParkable={post.isParkable} />
                                <BillIncludedText isBillIncluded={post.isBillIncluded} />
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", pl: 1, pt: 1 }}>
                            <PeriodText period={post.period} />
                            <PriceText price={post.price} />
                        </Box>
                    </Box>
                <Box sx={{ ml: 1 }}>
                    <LocationButton location={post.location} />
                </Box>
            </Box>
        </Box>
    );
};

export default PropertyPostBox;
