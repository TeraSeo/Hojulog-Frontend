import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import ContactField from "../../../textfields/ContactField";
import EmailField from "../../../textfields/EmailField";
import { isValidPhoneNumber } from "libphonenumber-js";
import TransactionTypeField from "../../../textfields/TransactionTypeField";
import IsFreeField from "../../../textfields/IsFreeField";
import PriceField from "../../../textfields/PriceField";
import SuburbField from "../../../textfields/SuburbField";
import { contactFormatError, contactRequiredError, descriptionRequiredError, emailFormatError, emailRequiredError, keywordOverError, priceFormatError, suburbRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";
import TransactionKeyWordField from "../../../textfields/TransactionKeyWordField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";

const EtcTransactionMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    contact: "",
    email: "",
    transactionType: "판매",
    priceType: "유료",
    price: "",
    suburb: "",
    selectedKeywords: [],
    isCommentAllowed: true
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, description, contact, email, priceType, price, suburb, selectedKeywords } = formValues;
  
    if (!title?.trim()) newErrors.title = titleRequiredError;
    if (!description?.trim()) newErrors.description = descriptionRequiredError;
  
    if (!contact?.trim() && !email?.trim()) {
      newErrors.contact = contactRequiredError;
      newErrors.email = emailRequiredError;
    }
  
    if (contact?.trim() && !isValidPhoneNumber(contact)) {
      newErrors.contact = contactFormatError;
    }
  
    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = emailFormatError;
    }

    if (priceType === "유료" && (!price || isNaN(price) || parseFloat(price) <= 0)) {
      newErrors.price = priceFormatError;
    }

    if (!suburb?.trim()) {
      newErrors.suburb = suburbRequiredError;
    }

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

        <TransactionTypeField
          value={formValues.transactionType}
          onChange={(value) => handleInputChange("transactionType", value)}
        />

        <IsFreeField
          value={formValues.priceType}
          onChange={(value) => handleInputChange("priceType", value)}
        />
        {formValues.priceType === "유료" && (
          <PriceField
            value={formValues.price}
            error={errors.price}
            onChange={(value) => handleInputChange("price", value)}
            smSize={12}
          />
        )}

        <SuburbField
          value={formValues.suburb}
          error={errors.suburb}
          onChange={(value) => handleInputChange("suburb", value)}
        />

        <CommentAvailabilityField
          value={formValues.isCommentAllowed} 
          onChange={(value) => handleInputChange("isCommentAllowed", value)} 
        />

        <TransactionKeyWordField
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />
      </Grid>
    </Paper>
  );
};

export default EtcTransactionMainInfoForm;