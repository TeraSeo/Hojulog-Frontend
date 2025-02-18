import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecificStudyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import StudyDetailBox from '../../../components/box/post/study/StudyDetailBox';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import SecretPostDialog from '../../../components/dialog/SecretPostDialog';
import { CommonPagePaddingXSize } from '../../../constant/PaddingResponsiveSize';

const StudyPostDetailPage = () => {
  const { postId } = useParams();
  const [studyPostData, setStudyPostData] = useState();
  const commentBoxRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificStudyPost(postId)
      .then((data) => {
        setStudyPostData(data);
        if (!data.isPublic && data.userId !== userId) {
          setDialogOpen(true);
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

  if (!studyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ filter: studyPostData.isPublic || studyPostData.userId === userId ? "none" : "blur(5px)", transition: "filter 0.3s ease-in-out" }}>
            <StudyDetailBox userId={studyPostData.userId} description={studyPostData.description} title={studyPostData.title} subCategory={studyPostData.subCategory} postId={studyPostData.postId} school={studyPostData.school} createdAt={studyPostData.createdAt} blogContents={studyPostData.blogContents} keywords={studyPostData.keywords} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={studyPostData.likeCounts} initialIsLiked={studyPostData.isUserLiked} pl={0} postId={studyPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={studyPostData.isCommentAllowed} commentsCounts={studyPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={studyPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      { studyPostData.location ? <EmbeddedMap mapUrl={studyPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          studyPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>

      <SecretPostDialog dialogOpen={dialogOpen} handleUseCredit={handleDenyAccess} handleDenyAccess={handleDenyAccess} />
    </Box>
  );
};

export default StudyPostDetailPage;
