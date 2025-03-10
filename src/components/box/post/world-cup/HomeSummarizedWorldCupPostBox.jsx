import React from "react";
import { Box } from "@mui/material";
import SummarizedPostTitleText from "../../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../../texts/CreatedAtText";
import SummarizedPostImageBox from "../SummarizedPostImageBox";
import SubCatoryText from "../../../texts/SubCatoryText";

const HomeSummarizedWorldCupPostBox = ({ post }) => {
    return (
        <Box>
            <SummarizedPostImageBox imageUrl={post.imageUrl} title={post.title} />

            <Box sx={{ width: "200px" }}>
                <Box sx={{ display: "flex", "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                    transform: "scale(1.02)",
                    cursor: "pointer",
                }, }}>
                    <SubCatoryText subCategory={post.subCategory} postId={post.postId} category={"이상형월드컵"} />
                    <SummarizedPostTitleText title={post.title} pl={0.5} postId={post.postId} category={"이상형월드컵"} />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", pt: 0.5 }}>
                    <Box>
                        <CreatedAtText createdAt={post.createdAt} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeSummarizedWorldCupPostBox;