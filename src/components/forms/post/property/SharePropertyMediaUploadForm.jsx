import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import ImageUploader from "../../../media/ImageUploader";
import { convertHEICtoJPEG } from "../../../../service/ImageService";

const SharePropertyMediaUploadForm = ({ onMediaChange, setIsMediaValid }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [errors, setErrors] = useState({});
  
  const validateMedia = () => {
    const newErrors = {};

    if (selectedImages.length > 6) {
      newErrors.selectedImages = "이미지는 최대 6개까지 업로드할 수 있습니다.";
    } else if (selectedImages.some((file) => !file.type.startsWith("image/"))) {
      newErrors.selectedImages = "유효하지 않은 이미지 파일입니다.";
    }

    setErrors(newErrors);
    setIsMediaValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {

    onMediaChange({
      selectedImages,
    });

    validateMedia();
  }, [selectedImages]);

  const imagesDropzone = useDropzone({
    onDrop: async (acceptedFiles) => {
      const convertedFiles = await Promise.all(acceptedFiles.map((file) => convertHEICtoJPEG(file)));
      const validImages = convertedFiles.filter((file) => file.type.startsWith("image/"));
      if (validImages.length + selectedImages.length > 6) {
        setErrors((prev) => ({
          ...prev,
          selectedImages: "이미지는 최대 6개까지 업로드할 수 있습니다.",
        }));
      } else {
        setSelectedImages((prev) => [...prev, ...validImages]);
      }
    },
    accept: "image/*",
  });

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        사진 업로드
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 3 }}>
        업로드할 사진을 선택하세요.
      </Typography>

      <Grid container spacing={4}>
        <ImageUploader
          imagesDropzone={imagesDropzone}
          selectedImages={selectedImages}
          removeImage={removeImage}
          errors={errors}
        />
      </Grid>

      {errors.media && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {errors.media}
        </Typography>
      )}
    </Paper>
  );
};

export default SharePropertyMediaUploadForm;
