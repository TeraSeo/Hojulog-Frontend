import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { primaryColor } from "../../constant/Color";

const SchoolMajorText = ({ school, major }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {school && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <SchoolIcon sx={{ color: primaryColor, fontSize: 20 }} />
          <Typography variant="body2" sx={{ fontSize: 14 }}>
            <strong>School: </strong>
            {school}
          </Typography>
        </Box>
      )}

      {major && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <ImportContactsIcon sx={{ color: primaryColor, fontSize: 20 }} />
          <Typography variant="body2" sx={{ fontSize: 14 }}>
            <strong>Major: </strong>
            {major}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SchoolMajorText;
