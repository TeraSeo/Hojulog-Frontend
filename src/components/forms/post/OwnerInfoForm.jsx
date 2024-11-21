import React from "react";
import { Typography, TextField, Box, Button, Stack, Chip, FormControlLabel, Checkbox } from "@mui/material";

function OwnerInfoForm({ isOwnWork, ownerInfo, setIsOwnWork, setOwnerInfo, newTag, setNewTag, tags, handleAddTag, handleRemoveTag }) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Owner Information</Typography>
      <FormControlLabel control={<Checkbox checked={isOwnWork} onChange={(e) => setIsOwnWork(e.target.checked)} />} label="Is this your own work?" />
      {isOwnWork && (
        <TextField
          label="Owner Information"
          variant="outlined"
          fullWidth
          required
          value={ownerInfo}
          onChange={(e) => setOwnerInfo(e.target.value)}
          sx={{ mb: 2 }}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField label="Add a tag" variant="outlined" fullWidth value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <Button onClick={handleAddTag} sx={{ ml: 1 }}>Add</Button>
      </Box>
      <Stack direction="row" spacing={1} mb={2}>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} onDelete={() => handleRemoveTag(index)} color="primary" />
        ))}
      </Stack>
    </>
  );
}

export default OwnerInfoForm;
