import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import LogoUploader from "../../media/LogoUploader";
import ImageUploader from "../../media/ImageUploader";
import VideoUploader from "../../media/VideoUploader";
import AspectRatioSelector from "../../media/AspectRatioSelector";

const EducationMediaUploadForm = ({ onMediaChange, setIsMediaValid }) => {
  const [logoImage, setLogoImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [errors, setErrors] = useState({});
  const [mediaAspectRatio, setMediaAspectRatio] = useState("16x9");

  const MAX_VIDEO_SIZE_MB = 30;
  const MAX_VIDEO_SIZE_BYTES = MAX_VIDEO_SIZE_MB * 1024 * 1024;

  const validateMedia = () => {
    const newErrors = {};

    // Logo is now optional, so we only validate if a logo is provided
    if (logoImage && !logoImage.type.startsWith("image/")) {
      newErrors.logoImage = "Logo must be a valid image file.";
    }

    if (selectedImages.length > 5) {
      newErrors.selectedImages = "You can upload up to 5 images only.";
    } else if (selectedImages.some((file) => !file.type.startsWith("image/"))) {
      newErrors.selectedImages = "All files must be valid image files.";
    }

    if (selectedVideos.length > 1) {
      newErrors.selectedVideos = "You can upload only 1 video.";
    } else if (
      selectedVideos.length === 1 &&
      !selectedVideos[0].type.startsWith("video/")
    ) {
      newErrors.selectedVideos = "Video must be a valid video file.";
    } else if (
      selectedVideos.length === 1 &&
      selectedVideos[0].size > MAX_VIDEO_SIZE_BYTES
    ) {
      newErrors.selectedVideos = `Video size must be less than ${MAX_VIDEO_SIZE_MB}MB.`;
    }

    if (selectedImages.length === 0 && selectedVideos.length === 0) {
      newErrors.media = "At least one image or video is required.";
    }

    setErrors(newErrors);
    setIsMediaValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    const isPortrait = mediaAspectRatio === "9x16";

    onMediaChange({
      logoImage,
      selectedImages,
      selectedVideos,
      isPortrait,
    });

    validateMedia();
  }, [logoImage, selectedImages, selectedVideos, mediaAspectRatio]);

  const handleAspectRatioChange = (event, newAspectRatio) => {
    if (newAspectRatio !== null) {
      setMediaAspectRatio(newAspectRatio);
    }
  };

  const logoDropzone = useDropzone({
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0 || !acceptedFiles[0]?.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          logoImage: "Logo must be a valid image file.",
        }));
        return;
      }
      const file = acceptedFiles[0];
      const img = new Image();
      img.onload = () => {
        if (img.width !== img.height) {
          setErrors((prev) => ({
            ...prev,
            logoImage: "Logo image must be square.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, logoImage: null }));
          setLogoImage(file);
        }
      };
      img.src = URL.createObjectURL(file);
    },
    accept: "image/*",
    maxFiles: 1,
  });

  const imagesDropzone = useDropzone({
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        setErrors((prev) => ({
          ...prev,
          invalidFile: "Some files were rejected.",
        }));
      }

      const validImages = acceptedFiles.filter((file) => file.type.startsWith("image/"));
      setSelectedImages((prev) => [...prev, ...validImages]);
    },
    accept: "image/*",
  });

  const videoDropzone = useDropzone({
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0 || !acceptedFiles[0]?.type.startsWith("video/")) {
        setErrors((prev) => ({
          ...prev,
          selectedVideos: "Video must be a valid video file.",
        }));
        return;
      }
      const videoFile = acceptedFiles[0];
      if (videoFile.size > MAX_VIDEO_SIZE_BYTES) {
        setErrors((prev) => ({
          ...prev,
          selectedVideos: `Video size must be less than ${MAX_VIDEO_SIZE_MB}MB.`,
        }));
        return;
      }
      setErrors((prev) => ({ ...prev, selectedVideos: null }));
      setSelectedVideos([videoFile]);
    },
    accept: "video/*",
    maxFiles: 1,
  });

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeLogo = () => setLogoImage(null);
  const removeVideo = () => setSelectedVideos([]);

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Media Upload
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 3 }}>
        Upload your logo, images, and videos.
      </Typography>

      {errors.invalidFile && (
        <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
          {errors.invalidFile}
        </Typography>
      )}

      <Grid container spacing={4}>
        <LogoUploader
          logoDropzone={logoDropzone}
          logoImage={logoImage}
          removeLogo={removeLogo}
          errors={errors}
          logoPrimaryColor="#001f5b"
        />

        <AspectRatioSelector
          mediaAspectRatio={mediaAspectRatio}
          handleAspectRatioChange={handleAspectRatioChange}
        />

        <ImageUploader
          imagesDropzone={imagesDropzone}
          selectedImages={selectedImages}
          removeImage={removeImage}
          errors={errors}
          mediaAspectRatio={mediaAspectRatio}
        />

        <VideoUploader
          videoDropzone={videoDropzone}
          selectedVideos={selectedVideos}
          removeVideo={removeVideo}
          errors={errors}
          mediaAspectRatio={mediaAspectRatio}
        />
      </Grid>
    </Paper>
  );
};

export default EducationMediaUploadForm;