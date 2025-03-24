import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { fontFamilies } from "../../../constant/FontFamilies";

const DescriptionBlockWithInitial = ({
  block,
  index,
  onChange,
  onRemove,
  onFontSizeChange,
  onFontWeightChange,
  onFontFamilyChange
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ fontSize: 12 }}>
      {/* Controls */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
          mb: 1,
          justifyContent: isMobile ? "center" : "space-between"
        }}
      >
        <Button variant="outlined" size="small" onClick={() => onFontSizeChange(index, 2)}>
          +Size
        </Button>
        <Button variant="outlined" size="small" onClick={() => onFontSizeChange(index, -2)}>
          -Size
        </Button>
        <Button variant="outlined" size="small" onClick={() => onFontWeightChange(index, 100)}>
          +Bold
        </Button>
        <Button variant="outlined" size="small" onClick={() => onFontWeightChange(index, -100)}>
          -Bold
        </Button>

        <FormControl
          size="small"
          sx={{ minWidth: 120, maxWidth: 160, flexGrow: 1 }}
        >
          <InputLabel>Font</InputLabel>
          <Select
            value={block.fontFamily || "Arial"}
            label="Font"
            onChange={(e) => onFontFamilyChange(index, e.target.value)}
          >
            {fontFamilies.map((font) => (
              <MenuItem key={font} value={font} style={{ fontFamily: font, fontSize: 13 }}>
                {font}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Text Area */}
      <TextField
        fullWidth
        multiline
        rows={3}
        value={block.content}
        onChange={(e) => {
          const newValue = e.target.value.slice(0, 1000);
          onChange(index, newValue);
        }}
        placeholder="Enter description..."
        inputProps={{
          maxLength: 1000,
          style: {
            fontSize: `${block.fontSize}px`,
            fontWeight: block.fontWeight,
            fontFamily: block.fontFamily || "Arial"
          }
        }}
        sx={{
          mb: 1,
          "& textarea": {
            padding: "8px"
          }
        }}
      />

      {/* Character count */}
      <Typography
        variant="caption"
        display="block"
        textAlign="right"
        sx={{ fontSize: 11, mb: 1 }}
      >
        {block.content.length} / 1000 characters
      </Typography>

      <Button variant="outlined" color="error" onClick={() => onRemove(index)} fullWidth size="small">
        Remove
      </Button>
    </Box>
  );
};

export default DescriptionBlockWithInitial;
