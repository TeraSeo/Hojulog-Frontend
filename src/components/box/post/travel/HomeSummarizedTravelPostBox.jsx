import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import PostRateBox from "../PostRateBox";

const HomeSummarizedTravelPostBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 2 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"travel"} />
            <CreatedAtText createdAt={post.createdAt} />
        </Box>

        <Box>
            <PostRateBox rate={post.rate} />
        </Box>
    </Box>;
}

export default HomeSummarizedTravelPostBox;