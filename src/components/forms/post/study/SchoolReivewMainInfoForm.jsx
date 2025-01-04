import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import SchoolField from "../../../textfields/SchoolField";
import { schoolRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";
import RatingField from "../../../textfields/RatingField";
import ContentBlockManager from "../ContentBlockManager";

const SchoolReivewMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    school: "",
    rate: 0.0,
    blogContents: []
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, school, rate } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;

    if (!school?.trim()) newErrors.school = schoolRequiredError;

    if (rate < 0.0 || rate > 5.0) {
      newErrors.rate = "평점은 0.0에서 5.0 사이여야 합니다.";
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
        제목, 학교 이름 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <RatingField
          value={formValues.rate}
          error={errors.rate}
          onChange={(value) => handleInputChange("rate", value)}
        />
        <SchoolField
          value={formValues.school}
          error={errors.school}
          onChange={(value) => handleInputChange("school", value)}
        />

          <Grid item xs={12}>
            <ContentBlockManager
              onChange={(blocks) => handleInputChange("blogContents", blocks)}
            />
          </Grid>
      </Grid>
    </Paper>
  );
};

export default SchoolReivewMainInfoForm;