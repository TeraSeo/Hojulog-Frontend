import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Upload icon

const SingleWorldCupForm = ({ index, data, onTitleChange, onImageChange }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        후보 {index + 1}
      </Typography>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onImageChange(index, e)}
        style={{ display: "none" }}
        id={`image-upload-${index}`}
      />
      <label htmlFor={`image-upload-${index}`}>
        <Box
          sx={{
            width: "100%",
            height: "220px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            border: "2px dashed #bbb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            cursor: "pointer",
            overflow: "hidden",
            mb: 2,
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              borderColor: "#007BFF",
              backgroundColor: "#f5faff",
            },
          }}
        >
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={`Preview ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <>
              <CloudUploadIcon sx={{ fontSize: 40, color: "#888" }} />
              <Typography color="textSecondary" sx={{ mt: 1, fontSize: "14px" }}>
                클릭하여 이미지 업로드
              </Typography>
            </>
          )}
        </Box>
      </label>

      {/* Title Input */}
      <TextField
        fullWidth
        label="제목 입력"
        variant="outlined"
        value={String(data.title ?? "")} // Ensure title is always a string
        onChange={(e) => onTitleChange(index, e.target.value)}
        sx={{ borderRadius: "8px" }}
      />
    </Box>
  );
};

export default SingleWorldCupForm;
