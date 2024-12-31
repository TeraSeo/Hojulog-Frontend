import React from "react";
import { Box } from "@mui/material";
import LocationButton from "../../../buttons/LocationButton";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SummarizedPostImageBox from "../SummarizedPostImageBox";
import SuburbText from "../../../texts/SuburbText";
import PeriodText from "../../../texts/PeriodText";
import PriceText from "../../../texts/PriceText";
import SubCatoryText from "../../../texts/SubCatoryText";

const HomeSummarizedPropertyPostBox = ({ post }) => {
    return (
        <Box>
            <SummarizedPostImageBox imageUrl={post.imageUrl} title={post.title} />

            <Box sx={{ width: "200px" }}>
                <Box sx={{ display: "flex", "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                    transform: "scale(1.02)",
                    cursor: "pointer",
                }, }}>
                    <SubCatoryText subCategory={post.subCategory} postId={post.postId} category={"property"} />
                    <SummarizedPostTitleText title={post.title} pl={0.5} postId={post.postId} category={"property"} />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", pt: 0.5 }}>
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <SuburbText suburb={post.suburb} />
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>

                        <Box sx={{ display: "flex", px: 1, pt: 1 }}>
                            <PeriodText period={post.period} />
                            <PriceText price={post.price} />
                        </Box>
                    </Box>

                    <LocationButton location={ post.location } />
                </Box>
            </Box>
        </Box>
    );
}

export default HomeSummarizedPropertyPostBox;
