import React from "react";
import { Typography, Box } from "@mui/material";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import SummarizedPostImageBox from "../SummarizedPostImageBox";
import CreatedAtText from "../../../texts/CreatedAtText";
import PriceText from "../../../texts/PriceText";

const HomeSummarizedTransactionPropertyBox = ({ post }) => {
    return (
        <Box>
            <SummarizedPostImageBox imageUrl={post.imageUrl} title={post.title} />

            <Box sx={{ width: "200px" }}>
                <SummarizedPostTitleText title={post.title} postId={post.postId} category={"사고팔기"} />

                <Typography
                    sx={{
                        pt: 0.5,
                        px: 1,
                        textAlign: "start",
                    }}
                >
                    <PriceText price={post.price} />
                </Typography>
                
                <CreatedAtText createdAt={post.createdAt} />
            </Box>
        </Box>
    );
}

export default HomeSummarizedTransactionPropertyBox;