import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import PostAverageRateBox from "../PostAverageRateBox";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import ViewCountsText from "../../../texts/ViewCountsText";

const JobPostBox = ({ post }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1.5,
                overflow: "hidden",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                pl: 1.5,
                pr: 2.5,
                py: 2
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
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
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
                                <SummarizedPostTitleText title={post.title} />
                                <PostAverageRateBox averageRate={post.averageRate} />
                            </Box>

                            <LocationButton location={post.location} />
                        </Box>

                        <Box
                            sx={{
                                pt: 1,
                                display: "flex",
                                textOverflow: "ellipsis",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box sx={{ display: "flex", pr: 1 }}>
                                <SuburbText suburb={post.suburb} />
                                <CreatedAtText createdAt={post.createdAt} />
                            </Box>

                            <ViewCountsText viewCounts={post.viewCounts} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default JobPostBox;
