import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";

const HomeSummarizedTravelPostBox = ({ post }) => {
    return <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pr: 2 }}>
        <Box>
            <SummarizedPostTitleText title={post.title} />
            <CreatedAtText createdAt={post.createdAt} />
        </Box>

        <LocationButton location={ post.location } />
    </Box>;
}

export default HomeSummarizedTravelPostBox;