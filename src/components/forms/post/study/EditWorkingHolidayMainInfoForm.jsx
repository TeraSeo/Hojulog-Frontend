import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import { keywordOverError, titleRequiredError } from "../../../../constant/ErrorMsg";
import PostVisibleField from "../../../textfields/PostVisibleField";
import StudyKeyWordField from "../../../textfields/StudyKeyWordField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";
import ContentBlockManagerWithInitialValue from "../ContentBlockManagerWithInitialValue";

const EditWorkingHolidayMainInfoForm = ({ onDataChange, setIsFormValid, mainInfoData }) => {
  const [formValues, setFormValues] = useState({
    postId: mainInfoData.postId,
    title: mainInfoData.title,
    blogContents: mainInfoData.blogContents,
    selectedKeywords: mainInfoData.selectedKeywords,
    isPublic: mainInfoData.isPublic,
    isCommentAllowed: mainInfoData.isPublic
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
        제목, 평점 등 정보를 입력하세요.
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

        <StudyKeyWordField 
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />

        <Grid item xs={12}>
            <ContentBlockManagerWithInitialValue
                onChange={(blocks) => handleInputChange("blogContents", blocks)}
                blogContents={mainInfoData.blogContents}
            />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EditWorkingHolidayMainInfoForm;