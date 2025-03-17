import React, { useState, useRef, useEffect } from "react";
import { Paper, Typography, Grid,Box, Button } from "@mui/material";
import { getUpdateJobPostDto, updateJob } from "../../../service/PostService";
import { useNavigate, useParams } from "react-router-dom";
import { primaryColor } from "../../../constant/Color";
import PostStepper from "../../../components/bar/PostStepper";
import EditTutoringMainInfoForm from "../../../components/forms/post/job/EditTutoringMainInfoForm";
import EditTutoringMediaInfoForm from "../../../components/forms/post/job/EditTutoringMediaInfoForm";
import EditJobPostPreviewDialog from "../../../components/preview/job/EditJobPostPreviewDialog";

const EditTutoringPage = () => {
  const { postId } = useParams();
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState(null);
  const [mediaData, setMediaData] = useState({});
  const [existingImages, setExistingImages] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
        fetchPostData(postId);
    }, []);

    const fetchPostData = (postId) => {
        getUpdateJobPostDto(postId)
            .then((data) => {
                setMainInfoData(data.updateJobMainInfoPostDto);
                setExistingImages(data.updateJobMediaInfoPostDto.existingImages);
            })
            .catch((error) => navigate("/"));
        };

  const mainInfoRef = useRef(null);
  const mediaUploadRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    if (isPreviewOpen) {
      handlePreview();
    }
  }, [mediaData]);

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

    const jobData = {
        "updateJobMainInfoPostDto": {
            ...mainInfoData,
            "category": "구인구직",
            "subCategory": "과외",
            "userId": userId
        },
        "updateJobMediaInfoPostDto": {
            "existingImages": existingImages,
        }
    };

    formData.append(
      "updateJobPostDto",
      new Blob([JSON.stringify(jobData)], { type: "application/json" })
    );

    mediaData.newImages.forEach((file) => formData.append("images", file));

    setIsLoading(true);
    const isCreated = await updateJob(formData);
        if (isCreated) {
            navigate("/own/posts");
        } else {
          setError("제출에 실패했습니다. 다시 제출 해주세요.");
          setIsLoading(false);
        }
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
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
        과외 수정하기
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        필요한 모든 정보를 입력해주세요
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <EditTutoringMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
            mainInfoData={mainInfoData}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <EditTutoringMediaInfoForm
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
              type="button"
              variant="outlined"
              sx={{ marginRight: 2, color: primaryColor, borderColor: primaryColor }}
              size="large"
              onClick={handlePreview}
            >
              미리보기
            </Button>
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

      <EditJobPostPreviewDialog
        open={isPreviewOpen}
        onClose={handleClosePreview}
        jobPostData={mainInfoData}
        mediaData={mediaData}
        existingImages={existingImages}
        subCategory={"과외"}
      />
    </Paper>
  );
};

export default EditTutoringPage;