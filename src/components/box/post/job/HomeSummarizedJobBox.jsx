import { Box } from "@mui/material";
import React from "react";
import PostAverageRateBox from "../PostAverageRateBox";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";

const HomeSummarizedJobBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 2, mb: 1 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} />
            <CreatedAtText createdAt={post.createdAt} />
        </Box>

        <PostAverageRateBox averageRate={post.averageRate} />
    </Box>;
}

export default HomeSummarizedJobBox;