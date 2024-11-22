import React from "react";
import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { logoPrimaryColor } from "../../constant/Color";

const TagsText = ({ tags }) => {
  return (
    <>
      {tags && tags.length > 0 && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, maxWidth: '70%', overflow: 'hidden', mt: 1 }}>
          <LocalOfferIcon sx={{ color: logoPrimaryColor }} />
          <Typography
            variant="body2"
            sx={{
              color: logoPrimaryColor,
              whiteSpace: 'nowrap', // Prevent wrapping
              overflow: 'hidden', // Hide overflowing text
              textOverflow: 'ellipsis', // Show ellipsis when the text is too long
            }}
          >
            {tags.join(" · ")}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default TagsText;
