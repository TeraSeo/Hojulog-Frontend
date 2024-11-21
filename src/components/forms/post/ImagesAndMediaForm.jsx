import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function ImagesAndMediaForm({
  selectedImages,
  setSelectedImages,
  selectedVideos,
  setSelectedVideos,
  logoImage,
  setLogoImage,
}) {
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files).filter((file) => file.type.startsWith("image/"));
    setSelectedImages((prev) => [...prev, ...files].slice(0, 5)); // Limit to 5 images
  };

  const handleVideoChange = (event) => {
    const files = Array.from(event.target.files).filter((file) => file.type.startsWith("video/"));
    setSelectedVideos((prev) => [...prev, ...files].slice(0, 2)); // Limit to 2 videos
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setLogoImage(file); // Save the selected logo image
    }
  };

  const handleRemoveLogo = () => {
    setLogoImage(null); // Remove the selected logo
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = (index) => {
    setSelectedVideos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Images and Media
      </Typography>

      {/* Logo Field */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        App Logo
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {logoImage ? (
          <Box sx={{ position: "relative" }}>
            <img
              src={URL.createObjectURL(logoImage)}
              alt="Logo Preview"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                border: "2px solid #ddd",
              }}
            />
            <IconButton
              onClick={handleRemoveLogo}
              sx={{
                position: "absolute",
                top: -5,
                right: -5,
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{
              width: "150px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px dashed gray",
              cursor: "pointer",
            }}
          >
            <IconButton component="label">
              <AddIcon fontSize="large" />
              <input type="file" hidden accept="image/*" onChange={handleLogoChange} />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Images Section */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Images ({selectedImages.length}/5)
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
          mb: 2,
        }}
      >
        {selectedImages.map((file, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={URL.createObjectURL(file)}
              alt={`Uploaded ${index}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <IconButton
              onClick={() => handleRemoveImage(index)}
              sx={{ position: "absolute", top: 0, right: 0, backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <IconButton
          component="label"
          disabled={selectedImages.length >= 5}
          sx={{
            border: "2px dashed gray",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100px",
            cursor: "pointer",
          }}
        >
          <AddIcon />
          <input type="file" hidden accept="image/*" multiple onChange={handleImageChange} />
        </IconButton>
      </Box>

      {/* Videos Section */}
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Videos ({selectedVideos.length}/2)
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {selectedVideos.map((file, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <video
              src={URL.createObjectURL(file)}
              controls
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <IconButton
              onClick={() => handleRemoveVideo(index)}
              sx={{ position: "absolute", top: 0, right: 0, backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <IconButton
          component="label"
          disabled={selectedVideos.length >= 2}
          sx={{
            border: "2px dashed gray",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100px",
            cursor: "pointer",
          }}
        >
          <AddIcon />
          <input type="file" hidden accept="video/*" multiple onChange={handleVideoChange} />
        </IconButton>
      </Box>
    </>
  );
}

export default ImagesAndMediaForm;
