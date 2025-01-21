import React, { useEffect, useState } from "react";
import { descriptionRequiredError, titleRequiredError } from "../../../constant/ErrorMsg";
import { Box, Grid } from "@mui/material";
import TitleField from "../../textfields/TitleField";
import DescriptionField from "../../textfields/DescriptionField";

const InquiryMainInfoForm = ({ onDataChange, setIsFormValid }) => {
    const [formValues, setFormValues] = useState({
        title: "",
        description: ""
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

    const handleInputChange = (field, value) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    useEffect(() => {
        checkFormValidity();
        onDataChange(formValues);
      }, [formValues]);

    return <Box>
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
        </Grid>
    </Box>;
}

export default InquiryMainInfoForm;