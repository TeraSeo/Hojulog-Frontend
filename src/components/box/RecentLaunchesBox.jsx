import React, { useEffect, useState } from "react";
import { getSpecificPost } from "../../service/PostService";
import { Box, Typography } from "@mui/material";
import SummarisePostBox from "./SummarisePostBox";

const RecentLaunchesBox = ({ postIds }) => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await Promise.all(postIds.map((id) => getSpecificPost(id)));
        setRecentPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [postIds]);

  return (
    <Box>
      <Typography variant="h6" sx={{ px: 2, py: 1 }}>
        Recent launches
      </Typography>
      {recentPosts.length > 0 ? (
        recentPosts.map((post) => (
          <SummarisePostBox key={post.id} post={post} />
        ))
      ) : (
        <Typography variant="body1">Loading recent launches...</Typography>
      )}
    </Box>
  );
};

export default RecentLaunchesBox;
