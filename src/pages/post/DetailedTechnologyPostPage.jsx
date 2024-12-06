import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import TechnologyDetailedPostBox from "../../components/box/TechnologyDetailedPostBox";
import RecentLaunchesBox from "../../components/box/RecentLaunchesBox";
import SummarisedProfileBox from "../../components/box/SummarisedProfileBox";
import PostCommentBox from "../../components/box/PostCommentsBox";
import { getCommentsByPostId } from "../../service/CommentService";
import { useLocation } from "react-router-dom";
import { getSpecificPost } from "../../service/PostService";

function DetailedTechnologyPostPage() {
    const location = useLocation();
    const { postId } = location.state || {};

    const [comments, setComments] = useState([]);
    const [post, setPost] = useState(null);

    const fetchPost = () => {
        if (postId) {
            getSpecificPost(postId)
            .then((data) => setPost(data || {}))
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
        }
      };

    const fetchComments = () => {
      if (postId) {
        getCommentsByPostId(postId)
          .then((data) => setComments(data || {}))
          .catch((error) => {
            console.error("Error fetching comments:", error);
            setComments({});
          });
      }
    };
  
    useEffect(() => {
      fetchPost();
      fetchComments();
    }, [postId]);

    if (!post) {
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
                <TechnologyDetailedPostBox postData={post} wholeCommentsLength={comments.wholeCommentsLength} />
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
                    <RecentLaunchesBox postIds={post.recentLaunchedPostIds} />
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <SummarisedProfileBox userId={post.userId} />
                </Box>
            </Box>

            <Box sx={{ marginTop: 4 }}>
                {/* Render the comments */}
                <PostCommentBox comments={comments} postId={post.postId} fetchComments={fetchComments} />
            </Box>
        </Container>
    );
}

export default DetailedTechnologyPostPage;