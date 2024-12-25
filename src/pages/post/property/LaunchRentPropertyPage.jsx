import React, { useState, useRef, useEffect } from "react";
import { Paper, Typography, Grid,Box, Button } from "@mui/material";
import { postProperty } from "../../../service/PostService";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../../constant/Color";
import PostStepper from "../../../components/bar/PostStepper";
import RentPropertyMainInfoForm from "../../../components/forms/post/property/RentPropertyMainInfoForm";
import RentPropertyMediaUploadForm from "../../../components/forms/post/property/RentPropertyMediaUploadForm";

const LaunchRentPropertyPage = () => {
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState({});
  const [mediaData, setMediaData] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

    const propertyData = {
      ...mainInfoData,
      "category": "부동산",
      // "isPortrait": mediaData.isPortrait,
      "subCategory": "렌트",
      "userId": userId
    };

    formData.append(
      "propertyPostDto",
      new Blob([JSON.stringify(propertyData)], { type: "application/json" })
    );

    mediaData.selectedImages.forEach((file) => formData.append("images", file));

    setIsLoading(true);
    const isCreated = await postProperty(formData);
        if (isCreated) {
            navigate("/");
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

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
        렌트 매물 등록하기
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        필요한 모든 정보를 입력해주세요
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <RentPropertyMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <RentPropertyMediaUploadForm
              onMediaChange={(media) => setMediaData(media)}
              setIsMediaValid={setIsMediaValid}
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
    </Paper>
  );
};

export default LaunchRentPropertyPage;