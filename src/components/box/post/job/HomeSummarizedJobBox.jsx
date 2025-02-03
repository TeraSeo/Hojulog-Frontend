import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import ViewCountsText from "../../../texts/ViewCountsText";
import { DetailedPostIconResponsiveSize2 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";

const HomeSummarizedJobBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 2, mb: 1 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"구인구직"} />
            <CreatedAtText createdAt={post.createdAt} />
        </Box>
        <ViewCountsText viewCounts={post.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
    </Box>;
}

export default HomeSummarizedJobBox;