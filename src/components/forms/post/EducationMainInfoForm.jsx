import React from "react";
import { Typography, TextField, MenuItem } from "@mui/material";

function EducationMainInfoForm({ title, subTitle, description, link, visibility, setTitle, setSubTitle, setDescription, setLink, setVisibility, visibilities }) {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>Tell us more about this event</Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>It makes the advertisement more efficient</Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Title of the event</Typography>
      <TextField
        placeholder="Enter the event title"
        variant="outlined"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Sub Title of the event</Typography>
      <TextField
        placeholder="Enter the event sub title"
        variant="outlined"
        fullWidth
        required
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Description</Typography>
      <TextField
        placeholder="Describe your event in a few sentences"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Link of the product</Typography>
      <TextField
        placeholder="Enter the event link"
        variant="outlined"
        fullWidth
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Visibility</Typography>
      <TextField
        select
        fullWidth
        required
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        sx={{ mb: 3 }}
      >
        {visibilities.map((vis) => (
          <MenuItem key={vis} value={vis}>{vis}</MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default EducationMainInfoForm;