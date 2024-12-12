import React from "react";
import { Grid, Typography } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactField = ({ value, error, onChange, defaultCountry = "AU" }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        연락처 (휴대폰 번호)
      </Typography>
      <div>
        <PhoneInput
          placeholder="휴대폰 번호를 입력하세요"
          value={value}
          onChange={onChange}
          defaultCountry={defaultCountry}
          error={!!error ? "유효하지 않은 휴대폰 번호입니다." : undefined}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: error ? "1px solid red" : "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </div>
    </Grid>
  );
};

export default ContactField;