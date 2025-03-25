import { Box } from "@mui/material";
import React, { useEffect, useState } from "react"
import { getSpecificArticlePost } from "../../../service/PostService";
import CreatedAtText from "../../texts/CreatedAtText";
import SummarizedOwnPostTitleText from "../../texts/SummarizedOwnPostTitleText";

const CommonOwnSummarizedArticleBox = ({ postId }) => {
    const [summarizedOwnArticle, setSummarizedOwnArticle] = useState();

    useEffect(() => {
        getSpecificArticlePost(postId)
        .then((data) => {
            setSummarizedOwnArticle(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!summarizedOwnArticle) {
        return <div>Loading...</div>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                overflow: "hidden",
                my: 1
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
                            <Box sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                <SummarizedOwnPostTitleText title={summarizedOwnArticle.title} postId={postId} category={"게시글"} />
                            </Box>

                            <Box sx={{ display: "flex", pr: 1, pt: 1, flexShrink: 0 }}>
                                <CreatedAtText createdAt={summarizedOwnArticle.createdAt} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CommonOwnSummarizedArticleBox;