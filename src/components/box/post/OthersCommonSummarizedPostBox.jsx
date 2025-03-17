import { Box } from "@mui/material";
import React, { useEffect, useState } from "react"
import { getSpecificPost } from "../../../service/PostService";
import CreatedAtText from "../../texts/CreatedAtText";
import OthersSummarizedOwnPostTitleText from "../../texts/OthersSummarizedOwnPostTitleText";

const OthersCommonSummarizedPostBox = ({ postId }) => {
    const [summarizedOwnPost, setSummarizedOwnPost] = useState();

    useEffect(() => {
        getSpecificPost(postId)
        .then((data) => {
            setSummarizedOwnPost(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!summarizedOwnPost) {
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
                                <OthersSummarizedOwnPostTitleText title={summarizedOwnPost.title} postId={postId} category={summarizedOwnPost.category} />
                            </Box>

                            <Box sx={{ display: "flex", pr: 1, pt: 1, flexShrink: 0 }}>
                                <CreatedAtText createdAt={summarizedOwnPost.createdAt} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default OthersCommonSummarizedPostBox;