import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";

const HomeSummarizedStudyPostBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", pr: 2 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"유학"} />
        </Box>

        <CreatedAtText createdAt={post.createdAt} />
    </Box>;
}

export default HomeSummarizedStudyPostBox;