import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

function DividerWithText({ text }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
      <Divider sx={{ flexGrow: 1 }} />
      <Typography variant="body2" color="textSecondary" sx={{ mx: 2 }}>
        {text}
      </Typography>
      <Divider sx={{ flexGrow: 1 }} />
    </Box>
  );
}

export default DividerWithText;
