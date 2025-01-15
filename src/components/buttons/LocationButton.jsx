import React from "react";
import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { primaryColor, secondaryColor } from "../../constant/Color";
import { LocationButtonResponsiveSize } from "../../constant/ComponentSizeResponsive";
import { LocationIconResponsiveSize } from "../../constant/IconSizeResponsive";

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
            width: LocationButtonResponsiveSize, 
            height: LocationButtonResponsiveSize, 
            padding: "6px", 
            borderRadius: { md: "12px", sm: "10px", xs: "8px" },
            "&:hover": {
              backgroundColor: secondaryColor, 
            },
          }}
        >
          <LocationOnIcon fontSize="small" sx={{ width: LocationIconResponsiveSize, height: LocationIconResponsiveSize }} />
        </IconButton>
      )}
    </>
  );
};

export default LocationButton;
