import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import { keywordOverError, titleRequiredError } from "../../../../constant/ErrorMsg";
import PostVisibleField from "../../../textfields/PostVisibleField";
import SocietyKeyWordField from "../../../textfields/SocietyKeyWordField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";
import ContentBlockManager from "../ContentBlockManager";

const ShareInfoMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    selectedKeywords: [],
    isPublic: true,
    isCommentAllowed: true,
    blogContents: []
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, selectedKeywords } = formValues;
  
    if (!title?.trim()) newErrors.title = titleRequiredError;

    if (selectedKeywords.length > 12) {
      newErrors.keyword = keywordOverError;
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };  

  useEffect(() => {
    checkFormValidity();
    onDataChange(formValues);
  }, [formValues]);

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        주요 정보 입력
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        제목, 설명 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />

        <PostVisibleField
            value={formValues.isPublic} 
            onChange={(value) => handleInputChange("isPublic", value)} 
          />

        <CommentAvailabilityField
          value={formValues.isCommentAllowed} 
          onChange={(value) => handleInputChange("isCommentAllowed", value)} 
        />

        <SocietyKeyWordField
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />
      </Grid>

      <Grid item xs={12}>
          <ContentBlockManager
            onChange={(blocks) => handleInputChange("blogContents", blocks)}
          />
        </Grid>
    </Paper>
  );
};

export default ShareInfoMainInfoForm;