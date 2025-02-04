import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import ViewCountsText from "../../../texts/ViewCountsText";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import { SummarizedPostIconResponsiveSize1 } from "../../../../constant/IconSizeResponsive";
import SummarizedDescriptionText from "../../../texts/SummarizedDescriptionText";

const SocietyPostBox = ({ post }) => {
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
                px: { md: 2.5, sm: 2, xs: 1.5 },
                py: { md: 3, xs: 2.5 }
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
                        <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
                            <SummarizedPostTitleText title={post.title} postId={post.postId} category={"생활"} pt={0} pl={0} />
                            <SummarizedDescriptionText description={post.description} pl={0} />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                textOverflow: "ellipsis",
                                justifyContent: "space-between",
                                alignItems: "end",
                                pt: 0.3
                            }}
                        >
                            <Box sx={{ display: "flex", pr: 1 }}>
                                <CreatedAtText createdAt={post.createdAt} pl={0} />
                            </Box>

                            <ViewCountsText viewCounts={post.viewCounts} width={SummarizedPostIconResponsiveSize1} height={SummarizedPostIconResponsiveSize1} fontSize={PostResponsiveFontSize2} pl={0} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SocietyPostBox;
