import React, { useState } from "react";
import { Typography, TextField, Grid, Box, Button, Chip } from "@mui/material";
import { logoAccentColor, logoPrimaryColor } from "../../constant/Color";

const TagsField = ({ tags, onChange }) => {
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTag = () => {
    if (tagInput.length > 19) {
      setError("Tag should be smaller than 20 characters.");
    } else if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 8) {
      onChange([...tags, tagInput.trim()]);
      setTagInput("");
      setError("");
    }
  };

  const handleRemoveTag = (tag) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
        Tags ({tags.length}/8)
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 1 }}>
        <TextField
          fullWidth
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="Add a tag"
          error={!!error}
          helperText={error}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: logoAccentColor, color: "#fff" }}
          onClick={handleAddTag}
          disabled={tags.length >= 8}
        >
          Add
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleRemoveTag(tag)}
            sx={{
              backgroundColor: logoPrimaryColor,
              color: "#fff",
              "& .MuiChip-deleteIcon": {
                color: "#fff",
              },
            }}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default TagsField;
