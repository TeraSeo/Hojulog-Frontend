import { Box } from "@mui/material";
import React from "react";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SuburbText from "../../../texts/SuburbText";
import PriceText from "../../../texts/PriceText";
import ViewCountsText from "../../../texts/ViewCountsText";
import NormalPostImageBox from "../NormalPostImageBox";
import CommentsCountsText from "../../../texts/CommentsCountsText";

const TransactionPostBox = ({ post }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                overflow: "hidden",
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <NormalPostImageBox imageUrl={post.imageUrl} title={post.title} />
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
                        <SummarizedPostTitleText title={post.title} />
                        <Box
                            sx={{
                                display: "flex",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <SuburbText suburb={post.suburb} />
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>

                        <Box sx={{ px: 1, pt: 0.5 }}>
                            <PriceText price={post.price} />
                        </Box>
                    </Box>
                    <Box sx={{ pt: 1, display: "flex", justifyContent: "end" }}>
                        <CommentsCountsText commentsCounts={post.commentCounts} />
                        <ViewCountsText viewCounts={post.viewCounts} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TransactionPostBox;
