import React from "react";
import { Box, Button } from "@mui/material";

const ImageBlockWithInitial = ({ block, index, onRemove }) => {
  const imageSrc = block.imageUrl || block.content;

  return (
    <Box>
      <img
        src={imageSrc}
        alt="Uploaded"
        style={{ width: "100%", height: "auto", marginBottom: 8 }}
      />
      <Button
        variant="outlined"
        color="error"
        onClick={() => onRemove(index)}
        fullWidth
      >
        Remove
      </Button>
    </Box>
  );
};

export default ImageBlockWithInitial;
