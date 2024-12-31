import React from "react";
import { Typography, Grid, Rating, Box } from "@mui/material";

const RatingField = ({ value, error, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        평점 (Rate)
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Rating
          name="rate"
          value={value}
          precision={0.1}
          onChange={handleChange}
          sx={{
            fontSize: "2rem",
            "& .MuiRating-iconFilled": {
              color: "#fbc02d",
            },
            "& .MuiRating-iconHover": {
              color: "#ffca28",
            },
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "15px" }}>
          {value?.toFixed(1) || "0.0"}
        </Typography>
      </Box>
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Grid>
  );
};

export default RatingField;