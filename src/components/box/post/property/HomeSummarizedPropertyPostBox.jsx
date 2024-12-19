import React from "react";
import { Card, Box } from "@mui/material";
import PostAverageRateBox from "../PostAverageRateBox";
import LocationButton from "../../../buttons/LocationButton";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SummarizedPostImageBox from "../SummarizedPostImageBox";

const HomeSummarizedPropertyPostBox = ({ post }) => {
    return (
        <Box>
            <SummarizedPostImageBox imageUrl={post.imageUrl} title={post.title} />

            <Box sx={{ width: "200px" }}>
                <SummarizedPostTitleText title={post.title} />

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", pt: 0.5 }}>
                    <Box>
                        <PostAverageRateBox averageRate={post.averageRate} />
                        <CreatedAtText createdAt={post.createdAt} />
                    </Box>

                    <LocationButton location={ post.location } />
                </Box>
            </Box>
        </Box>
    );
}

export default HomeSummarizedPropertyPostBox;
