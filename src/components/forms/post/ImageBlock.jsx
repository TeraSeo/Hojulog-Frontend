import React from "react";
import { Box, Button } from "@mui/material";

const ImageBlock = ({ block, index, onRemove }) => {
  return (
    <Box>
      <img
        src={block.content}
        alt="Uploaded"
        style={{ width: "100%", height: "auto", marginBottom: 8 }}
      />
      <Button variant="outlined" color="error" onClick={() => onRemove(index)} fullWidth>
        Remove
      </Button>
    </Box>
  );
};

export default ImageBlock;
