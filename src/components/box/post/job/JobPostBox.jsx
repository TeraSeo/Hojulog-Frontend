import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import LocationButton from "../../../buttons/LocationButton";
import SuburbText from "../../../texts/SuburbText";
import ViewCountsText from "../../../texts/ViewCountsText";
import { SummarizedPostIconResponsiveSize2 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";

const JobPostBox = ({ post }) => {
    return (
        <Box
            sx={{
                mt: 1.5,
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                px: { md: 2.5, sm: 2, xs: 1.5 },
                py: { md: 3, sm: 2, xs: 1.5 }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    overflow: "hidden",
                }}
            >
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{whiteSpace: "nowrap", minWidth: 0}}>
                            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"구인구직"} pt={0} pl={0} />
                            <Box
                                sx={{
                                    display: "flex",
                                    textOverflow: "ellipsis",
                                    mt: 0.5
                                }}
                            >

                                <ViewCountsText viewCounts={post.viewCounts} width={SummarizedPostIconResponsiveSize2} height={SummarizedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} pl={0} />

                                <Box sx={{ display: "flex", pl: 0.5, alignItems: "center" }}>
                                    <SuburbText suburb={post.suburb} />
                                    <CreatedAtText createdAt={post.createdAt} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ ml: 1 }}>
                            <LocationButton location={post.location} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default JobPostBox;
