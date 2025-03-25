import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { getSpecificArticlePost } from "../../service/PostService";
import BoardDetailBox from "../../components/box/post/board/BoardDetailBox";
import CategorySidebar from "../../components/bar/CategorySidebar";
import UpdateArticleButton from "../../components/buttons/UpdateArticleButton";
import RemoveArticleButton from "../../components/buttons/RemoveArticleButton";

const OwnBoardDetailPage = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId') || "";
    const { postId } = useParams();
    const [articlePostData, setArticlePostData] = useState();

    useEffect(() => {
        fetchPostData(postId);
      }, []);
    
      const fetchPostData = (postId) => {
        getSpecificArticlePost(postId)
          .then((data) => {
            setArticlePostData(data);
            if (userId.toString() !== data.userId.toString()) { navigate("/"); }
          })
          .catch((error) => console.error("Error fetching posts:", error));
      };
    
      if (!articlePostData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{  px: CommonPagePaddingXSize }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <CategorySidebar />
            </Grid>

            <Grid item xs={12} md={9}>
                <BoardDetailBox userId={articlePostData.userId} imageUrls={articlePostData.imageUrls} description={articlePostData.description} title={articlePostData.title} createdAt={articlePostData.createdAt} />
            </Grid>
        </Grid>

          <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
                <UpdateArticleButton postId={articlePostData.postId} />
                <RemoveArticleButton postId={articlePostData.postId} />
            </Box>
      </Box>;
}

export default OwnBoardDetailPage;