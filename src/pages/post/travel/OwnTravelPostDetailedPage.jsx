import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecificTravelPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import TravelDetailBox from '../../../components/box/post/travel/TravelDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import SecretPostDialog from '../../../components/dialog/SecretPostDialog';
import { CommonPagePaddingXSize } from '../../../constant/PaddingResponsiveSize';

const OwnTravelPostDetailedPage = () => {
  const { postId } = useParams();
  const [travelPostData, setTravelPostData] = useState();
  const commentBoxRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));
    
  
  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificTravelPost(postId)
      .then((data) => {
        setTravelPostData(data);
        if (userId.toString() !== data.userId.toString()) {
          navigate("/");
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUseCredit = () => {
    setIsUnlocked(true);
    setDialogOpen(false);
  };

  const handleDenyAccess = () => {
    if (window.history.length > 1) {
        navigate(-1); 
    } else {
        navigate('/'); 
    }
  };

  if (!travelPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ filter: travelPostData.isPublic || travelPostData.userId === userId ? "none" : "blur(5px)", transition: "filter 0.3s ease-in-out" }}>
            <TravelDetailBox userId={travelPostData.userId} title={travelPostData.title} subCategory={travelPostData.subCategory} postId={travelPostData.postId} createdAt={travelPostData.createdAt} price={travelPostData.price} rate={travelPostData.rate} createdDate={travelPostData.createdAt} blogContents={travelPostData.blogContents} keywords={travelPostData.keywords} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={travelPostData.likeCounts} initialIsLiked={travelPostData.isUserLiked} pl={0} postId={travelPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={travelPostData.isCommentAllowed} commentsCounts={travelPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={travelPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
          <UpdatePostButton category={"여행"} subCategory={travelPostData.subCategory} postId={travelPostData.postId} />
          <RemovePostButton postId={travelPostData.postId} />
      </Box>

      { travelPostData.location ? <EmbeddedMap mapUrl={travelPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          travelPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>

      <SecretPostDialog dialogOpen={dialogOpen} handleUseCredit={handleDenyAccess} handleDenyAccess={handleDenyAccess} />
    </Box>
  );
};

export default OwnTravelPostDetailedPage;
