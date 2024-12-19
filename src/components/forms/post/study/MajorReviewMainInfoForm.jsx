import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import ContactField from "../../../textfields/ContactField";
import EmailField from "../../../textfields/EmailField";
import SchoolField from "../../../textfields/SchoolField";
import MajorField from "../../../textfields/MajorField";
import { isValidPhoneNumber } from "libphonenumber-js";
import SuburbField from "../../../textfields/SuburbField";
import { contactRequiredError, descriptionRequiredError, emailRequiredError, majorRequiredError, schoolRequiredError, suburbRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";

const MajorReviewMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    contact: "",
    email: "",
    school: "",
    major: "",
    suburb: ""
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, description, contact, email, school, major, suburb } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;
    if (!description?.trim()) newErrors.description = descriptionRequiredError;

    if (contact?.trim() && !isValidPhoneNumber(contact)) {
      newErrors.contact = contactRequiredError;
    }

    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = emailRequiredError;
    }

    if (!school?.trim()) newErrors.school = schoolRequiredError;
    if (!major?.trim()) newErrors.major = majorRequiredError;

    if (!suburb?.trim()) {
      newErrors.suburb = suburbRequiredError;
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
        제목, 설명, 학교 이름, 전공, 연락처, 이메일, 지역 등 정보를 입력하세요.
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
        
        <ContactField
          value={formValues.contact}
          error={errors.contact}
          onChange={(value) => handleInputChange("contact", value)}
        />
        <EmailField
          value={formValues.email}
          error={errors.email}
          onChange={(value) => handleInputChange("email", value)}
        />

        <SchoolField
          value={formValues.school}
          error={errors.school}
          onChange={(value) => handleInputChange("school", value)}
        />
        <MajorField
          value={formValues.major}
          error={errors.major}
          onChange={(value) => handleInputChange("major", value)}
        />
        <SuburbField
          value={formValues.suburb}
          error={errors.suburb}
          onChange={(value) => handleInputChange("suburb", value)}
        />
      </Grid>
    </Paper>
  );
};

export default MajorReviewMainInfoForm;