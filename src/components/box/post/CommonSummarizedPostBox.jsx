import { Box } from "@mui/material";
import React, { useEffect, useState } from "react"
import { getSpecificPost } from "../../../service/PostService";
import SummarizedPostTitleText from "../../texts/SummarizedPostTitleText";
import CreatedAtText from "../../texts/CreatedAtText";

const CommonSummarizedPostBox = ({ postId }) => {
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
                            <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
                                <SummarizedPostTitleText title={summarizedOwnPost.title} postId={postId} category={summarizedOwnPost.category} />
                            </Box>

                            <Box sx={{ display: "flex", pr: 1 }}>
                                <CreatedAtText createdAt={summarizedOwnPost.createdAt} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CommonSummarizedPostBox;