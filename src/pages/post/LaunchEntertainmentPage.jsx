import React, { useState, useRef, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { normalizeEmptyStringsToNull, postEntertainment } from "../../service/PostService";
import { useNavigate, useParams } from "react-router-dom";
import { logoPrimaryColor } from "../../constant/Color";
import { normalizeSubCategory } from "../../service/CategoryService";
import PostStepper from "../../components/bar/PostStepper";
import EntertainmentMainInfoForm from "../../components/forms/post/EntertainmentMainInfoForm";
import EntertainmentMediaUploadForm from "../../components/forms/post/EntertainmentMediaUploadForm";
import EntertainmentPostPreviewDialog from "../../components/dialog/EntertainmentPostPreviewDialog";

const LaunchEntertainmentPage = () => {
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState({});
  const [mediaData, setMediaData] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const mainInfoRef = useRef(null);
  const mediaUploadRef = useRef(null);
  const submitRef = useRef(null);
  const navigate = useNavigate();

  const { subCategory } = useParams();

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
    const formData = new FormData();
    const normalizedSubCategory = normalizeSubCategory("Entertainment", subCategory);
    const normalizedMainInfoData = normalizeEmptyStringsToNull(mainInfoData);
    const normalizedMediaData = normalizeEmptyStringsToNull(mediaData);

    const educationData = {
      ...normalizedMainInfoData,
      "category": "Entertainment",
      "isPortrait": mediaData.isPortrait,
      "subCategory": normalizedSubCategory,
      "youtubeUrl": normalizedMediaData.youtubeUrl
    };

    formData.append(
      "entertainmentPostDto",
      new Blob([JSON.stringify(educationData)], { type: "application/json" })
    );

    if (mediaData.logoImage) formData.append("logoImage", mediaData.logoImage);
    mediaData.selectedImages.forEach((file) => formData.append("images", file));

    setIsLoading(true);
    const isCreated = await postEntertainment(formData);
        if (isCreated) {
            navigate("/");
        } else {
          setError("Failed to submit your post. Please try again.");
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
      <Typography variant="h4" gutterBottom align="center" sx={{ color: logoPrimaryColor }}>
        Launch Your Entertainment
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        Provide all the necessary details to launch your entertainment
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <EntertainmentMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <EntertainmentMediaUploadForm
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
              sx={{ marginRight: 2, color: logoPrimaryColor, borderColor: logoPrimaryColor }}
              size="large"
              onClick={handlePreview}
            >
              Preview
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: logoPrimaryColor, color: "#FFF" }}
              size="large"
              disabled={!isMainValid || !isMediaValid || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>

            {error && (
              <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>

      <EntertainmentPostPreviewDialog
        open={isPreviewOpen}
        onClose={handleClosePreview}
        mainInfoData={mainInfoData}
        mediaData={mediaData}
      />
    </Paper>
  );
};

export default LaunchEntertainmentPage;