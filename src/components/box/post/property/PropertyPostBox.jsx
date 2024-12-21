import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import PostAverageRateBox from "../PostAverageRateBox";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import PriceText from "../../../texts/PriceText";
import ViewCountsText from "../../../texts/ViewCountsText";
import NormalPostImageBox from "../NormalPostImageBox";
import PeriodText from "../../../texts/PeriodText";
import PropertyTypeText from "../../../texts/PropertyTypeText";

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
                        <Box sx={{ display: "flex" }}>
                            <PropertyTypeText propertyType={post.subCategory} />
                            <SummarizedPostTitleText title={post.title} pl={0.5} />
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
                        <PostAverageRateBox averageRate={post.averageRate} />
                        <Box sx={{ pt: 1 }}><ViewCountsText viewCounts={post.viewCounts} /></Box>
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
