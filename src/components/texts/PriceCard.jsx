import React from 'react';
import { Box, Typography } from '@mui/material';

const PriceCard = ({ price, period, isBillIncluded=null }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 0.7,
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        px: 1
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: '13px',
          color: '#001f5b',
          marginBottom: '1px',
        }}
      >
        ${price}
        {period && (
        <Typography
          component="span"
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            color: '#6B7280',
          }}
        >
          /{period}
        </Typography>) }
      </Typography>

      {isBillIncluded !== null && (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '9px',
            color: '#001f5b',
          }}
        >
          {isBillIncluded ? 'Bills included' : 'Bills not inc.'}
        </Typography>
      )}
    </Box>
  );
};

export default PriceCard;