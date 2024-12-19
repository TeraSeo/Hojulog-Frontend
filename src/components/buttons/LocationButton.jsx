import React from "react";
import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { primaryColor, secondaryColor } from "../../constant/Color";

const LocationButton = ({ location }) => {
  const handleLocationClick = () => {
    if (location) {
      window.open(location, "_blank");
    }
  };

  return (
    <>
      {location && (
        <IconButton
          onClick={handleLocationClick}
          sx={{
            color: "#fff",
            backgroundColor: primaryColor, 
            width: "36px", 
            height: "36px", 
            padding: "6px", 
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: secondaryColor, 
            },
          }}
        >
          <LocationOnIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
};

export default LocationButton;
