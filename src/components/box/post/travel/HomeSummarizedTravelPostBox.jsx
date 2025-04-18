import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";

const HomeSummarizedTravelPostBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 2 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"여행"} />
        </Box>

        <CreatedAtText createdAt={post.createdAt} />
    </Box>;
}

export default HomeSummarizedTravelPostBox;