import React, { useRef } from "react";
import { Box, Button, FormControl, InputLabel, Paper } from "@mui/material";
import { primaryColor } from "../../constant/Color";
import { convertHEICtoJPEG } from "../../service/ImageService";

const WorldCupImageCoverUploader = ({ coverImageUrl, setCoverImage, setCoverImageUrl }) => {
  const fileInputRef = useRef(null);

  const handleCoverImageUpload = async (event) => {
    if (!event.target.files || event.target.files.length === 0) return;

    let file = event.target.files[0];

    console.log(`📢 Selected file: ${file.name}, Type: ${file.type}`);

    // Convert HEIC to JPEG if needed
    file = await convertHEICtoJPEG(file);

    setCoverImage(file);
    setCoverImageUrl(URL.createObjectURL(file));

    // Reset input value to allow re-upload
    event.target.value = "";
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
    setCoverImageUrl("");

    // Reset input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel shrink sx={{ fontSize: 16, fontWeight: "bold", color: "#6b7280" }}>
        표지 사진 업로드
      </InputLabel>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          borderColor: "#d1d5db",
          backgroundColor: "#f9fafb",
        }}
      >
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: primaryColor,
            color: "white",
            fontWeight: "bold",
            mb: 2,
            ":hover": { backgroundColor: "#1565c0" },
          }}
        >
          파일 선택
          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={handleCoverImageUpload}
          />
        </Button>

        {coverImageUrl && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 250,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 1,
            }}
          >
            <img
              src={coverImageUrl}
              alt="Cover Preview"
              width="100%"
              style={{ maxHeight: 200, objectFit: "cover", borderRadius: 8 }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                ":hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
              }}
              onClick={handleRemoveImage}
            >
              삭제
            </Button>
          </Box>
        )}
      </Paper>
    </FormControl>
  );
};

export default WorldCupImageCoverUploader;