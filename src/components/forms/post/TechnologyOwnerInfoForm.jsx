import React from "react";
import { Typography, TextField, Box, Button, Stack, Chip, FormControlLabel, Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";

function TechnologyOwnerInfoForm({ control }) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Owner Information</Typography>
      <Controller
        name="isOwnWork"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Is this your own work?"
          />
        )}
      />
      <Controller
        name="ownerInfo"
        control={control}
        render={({ field }) => (
          field.value && (
            <TextField
              {...field}
              label="Owner Information"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          )
        )}
      />
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Controller
          name="newTag"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Add a tag" variant="outlined" fullWidth />
          )}
        />
        <Button onClick={() => control.setValue("tags", [...control.getValues("tags"), control.getValues("newTag")])} sx={{ ml: 1 }}>Add</Button>
      </Box>
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <Stack direction="row" spacing={1} mb={2}>
            {field.value.map((tag, index) => (
              <Chip key={index} label={tag} onDelete={() => field.onChange(field.value.filter((_, i) => i !== index))} color="primary" />
            ))}
          </Stack>
        )}
      />
    </>
  );
}

export default TechnologyOwnerInfoForm;