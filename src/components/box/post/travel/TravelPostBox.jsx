import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import PostRateBox from "../PostRateBox";
import SummarizedDescriptionText from "../../../texts/SummarizedDescriptionText";

const TravelPostBox = ({ post }) => {
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
                                <SummarizedPostTitleText title={post.title} postId={post.postId} category={"여행"} />
                                <SummarizedDescriptionText description={post.description} />
                                <PostRateBox rate={post.rate} />
                            </Box>

                            <LocationButton location={post.location} />
                        </Box>

                        <Box
                            sx={{
                                pt: 1,
                                display: "flex",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <Box sx={{ display: "flex", pr: 1 }}>
                                <CreatedAtText createdAt={post.createdAt} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TravelPostBox;
