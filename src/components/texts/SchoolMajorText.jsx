import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { primaryColor } from "../../constant/Color";
import { SubTitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { SchoolIconResponsiveSize } from "../../constant/IconSizeResponsive";

const SchoolMajorText = ({ school }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {school && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <SchoolIcon sx={{ color: primaryColor, fontSize: SchoolIconResponsiveSize }} />
          <Typography variant="body2" sx={{ fontSize: SubTitleResponsiveFontSize1 }}>
            <strong>School: </strong>
            {school}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SchoolMajorText;
