import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const PostStepper = ({isMainValid, isMediaValid, handleStepClick}) => {
    return (
        <Stepper activeStep={isMainValid && isMediaValid ? 2 : isMainValid ? 1 : 0} alternativeLabel sx={{ marginBottom: 4 }}>
            {["Main Information", "Media Upload", "Submit"].map((label, index) => (
            <Step key={label} onClick={() => handleStepClick(index)}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
    );
}

export default PostStepper;