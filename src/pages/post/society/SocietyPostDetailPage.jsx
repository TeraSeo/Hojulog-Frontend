import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecificSocietyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import SoceityDetailBox from '../../../components/box/post/society/SocietyDetailBox';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import SecretPostDialog from '../../../components/dialog/SecretPostDialog';
import { CommonPagePaddingXSize } from '../../../constant/PaddingResponsiveSize';
import { checkIsUserPaid, viewSecretPost } from '../../../service/UserService';

const SocietyPostDetailPage = () => {
  const { postId } = useParams();
  const [societyPostData, setSocietyPostData] = useState();
  const commentBoxRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificSocietyPost(postId)
      .then(async (data) => {
        setSocietyPostData(data);
        if (!data.isPublic && localStorage.getItem('userId') === null) {
          const isConfirmed = window.confirm("비밀글 열람은 로그인이 필요합니다. 로그인하시겠습니까?");
          if (isConfirmed) {
            navigate("/login");
          } else {
            navigate(-1);
          }
        }
        else {
          if (!data.isPublic && data.userId !== userId) {
            const isPaid = await checkIsUserPaid(userId, data.postId);
            if (isPaid) {
              setIsUnlocked(true);
            }
            else {
              setDialogOpen(true);
            }
          }
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUseCredit = async () => {
    const isValid = await viewSecretPost(userId, societyPostData.postId);
    if (isValid) {
      setIsUnlocked(true);
      setDialogOpen(false);
    }
    else {
      alert("포인트가 부족합니다.")
    }
  };

  const handleDenyAccess = () => {
    if (window.history.length > 1) {
        navigate(-1); 
    } else {
        navigate('/'); 
    }
  };

  if (!societyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ filter: isUnlocked || societyPostData.isPublic || societyPostData.userId === userId ? "none" : "blur(5px)", transition: "filter 0.3s ease-in-out" }}>
            <SoceityDetailBox userId={societyPostData.userId} imageUrls={societyPostData.imageUrls} description={societyPostData.description} title={societyPostData.title} subCategory={societyPostData.subCategory} postId={societyPostData.postId} contact={societyPostData.contact} email={societyPostData.email} createdAt={societyPostData.createdAt} blogContents={societyPostData.blogContents} keywords={societyPostData.keywords} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={societyPostData.likeCounts} initialIsLiked={societyPostData.isUserLiked} pl={0} postId={societyPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={societyPostData.isCommentAllowed} commentsCounts={societyPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={societyPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      { societyPostData.location ? <EmbeddedMap mapUrl={societyPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          societyPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>

      <SecretPostDialog dialogOpen={dialogOpen} handleUseCredit={handleUseCredit} handleDenyAccess={handleDenyAccess} />
    </Box>
  );
};

export default SocietyPostDetailPage;
