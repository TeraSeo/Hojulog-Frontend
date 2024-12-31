import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import PostRateBox from "../PostRateBox";

const HomeSummarizedStudyPostBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", pr: 2 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"study"} />
            <CreatedAtText createdAt={post.createdAt} />
        </Box>
        <PostRateBox rate={post.rate} />
    </Box>;
}

export default HomeSummarizedStudyPostBox;