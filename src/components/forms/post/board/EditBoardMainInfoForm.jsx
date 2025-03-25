import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import { descriptionRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";

const EditBoardMainInfoForm = ({ onDataChange, setIsFormValid, mainInfoData }) => {
  const [formValues, setFormValues] = useState({
    postId: mainInfoData.postId,
    title: mainInfoData.title,
    description: mainInfoData.description,
    isCommentAllowed: mainInfoData.isCommentAllowed
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, description } = formValues;
  
    if (!title?.trim()) newErrors.title = titleRequiredError;
    if (!description?.trim()) newErrors.description = descriptionRequiredError;
  
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
        제목, 설명, 연락처, 이메일, 가격, 지역 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <DescriptionField
          value={formValues.description}
          error={errors.description}
          onChange={(value) => handleInputChange("description", value)}
        />

        <CommentAvailabilityField
          value={formValues.isCommentAllowed} 
          onChange={(value) => handleInputChange("isCommentAllowed", value)} 
        />

      </Grid>
    </Paper>
  );
};

export default EditBoardMainInfoForm;