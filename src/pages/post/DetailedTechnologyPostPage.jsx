import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import TechnologyDetailedPostBox from "../../components/box/post/TechnologyDetailedPostBox";
import RecentLaunchesBox from "../../components/box/post/RecentLaunchesBox";
import SummarisedProfileBox from "../../components/box/profile/SummarisedProfileBox";
import PostCommentBox from "../../components/box/comment/PostCommentsBox";
import { useLocation } from "react-router-dom";
import { getSpecificPost } from "../../service/PostService";

function DetailedTechnologyPostPage() {
    const location = useLocation();
    const { postId } = location.state || {};

    const [postData, setPostData] = useState(null);

    const fetchPost = () => {
        if (postId) {
            getSpecificPost(postId)
            .then((data) => setPostData(data || {}))
            .catch((error) => {
                console.error("Error fetching post data:", error);
            });
        }
      };
  
    useEffect(() => {
      fetchPost();
    }, [postId]);

    if (!postData) {
        return <div>Post data not available.</div>;
    }

    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: 4,
                paddingBottom: 4,
            }}
        >
            <Box sx={{ marginBottom: 4 }}>
                <TechnologyDetailedPostBox postData={postData} wholeCommentsLength={postData.wholeCommentsLength} />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "stretch",
                    gap: 4,
                }}
            >
                <Box sx={{ flex: 2, minWidth: 0 }}>
                    <RecentLaunchesBox postIds={postData.recentLaunchedPostIds} />
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <SummarisedProfileBox userId={postData.userId} />
                </Box>
            </Box>

            <Box sx={{ marginTop: 4 }}>
                <PostCommentBox postId={postData.postId} />
            </Box>
        </Container>
    );
}

export default DetailedTechnologyPostPage;