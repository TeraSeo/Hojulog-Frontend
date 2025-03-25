import React, { useState, useRef, useEffect } from "react";
import { Paper, Typography, Grid,Box, Button } from "@mui/material";
import { getUpdateArticleDto, updateArticle } from "../../service/PostService";
import { useNavigate, useParams } from "react-router-dom";
import { primaryColor } from "../../constant/Color";
import PostStepper from "../../components/bar/PostStepper";
import EditBoardMainInfoForm from "../../components/forms/post/board/EditBoardMainInfoForm";
import EditBoardMediaInfoForm from "../../components/forms/post/board/EditBoardMediaInfoForm";

const EditBoardPage = () => {
  const { postId } = useParams();
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState(null);
  const [mediaData, setMediaData] = useState({});
  const [existingImages, setExistingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
        fetchPostData(postId);
    }, []);

    const fetchPostData = (postId) => {
        getUpdateArticleDto(postId)
            .then((data) => {
                setMainInfoData(data.updateArticleMainInfoPostDto);
                setExistingImages(data.updateArticleMediaInfoPostDto.existingImages);
            })
            .catch((error) => navigate("/"));
        };

  const mainInfoRef = useRef(null);
  const mediaUploadRef = useRef(null);
  const submitRef = useRef(null);

  const handleStepClick = (step) => {
    switch (step) {
      case 0:
        mainInfoRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 1:
        mediaUploadRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        submitRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData();

    const articleData = {
        "updateArticleMainInfoPostDto": {
            ...mainInfoData,
            "userId": userId
        },
        "updateArticleMediaInfoPostDto": {
            "existingImages": existingImages,
        }
    };

    formData.append(
      "updateArticlePostDto",
      new Blob([JSON.stringify(articleData)], { type: "application/json" })
    );

    mediaData.newImages.forEach((file) => formData.append("images", file));

    setIsLoading(true);
    const isCreated = await updateArticle(formData);
        if (isCreated) {
            navigate("/own/articles");
        } else {
          setError("제출에 실패했습니다. 다시 제출 해주세요.");
          setIsLoading(false);
        }
  };

  if (mainInfoData === null) {
    return <div>Loading...</div>;
  }

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
        게시글 수정하기
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        필요한 모든 정보를 입력해주세요
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <EditBoardMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
            mainInfoData={mainInfoData}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <EditBoardMediaInfoForm
              onMediaChange={(media) => setMediaData(media)}
              setIsMediaValid={setIsMediaValid}
              existingImages={existingImages}
              setExistingImages={(images) => setExistingImages(images)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} ref={submitRef}>
          <Box textAlign="right">
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: primaryColor, color: "#FFF" }}
              size="large"
              disabled={!isMainValid || !isMediaValid || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "제출중..." : "제출"}
            </Button>

            {error && (
              <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EditBoardPage;
