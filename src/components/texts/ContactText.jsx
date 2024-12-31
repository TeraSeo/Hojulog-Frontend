import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactText = ({ contact, email }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
       {(contact || email) && (<Box sx={{
            display: 'inline-block',
            border: '0.8px solid #001f5b',
            color: '#001f5b',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '10px',
            borderRadius: '6px',
            padding: '4px 8px',
            textAlign: 'center',
            }}>
            Contact
        </Box>)}

      {contact && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            padding: '4px 2px',
            textAlign: 'center',
          }}
        >
          <PhoneIcon sx={{ fontSize: '14px', mr: 0.5 }} />
          <Typography variant="body2" sx={{ fontSize: '10px' }}>
            {contact}
          </Typography>
        </Box>
      )}

      {email && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            padding: '4px 2px',
            textAlign: 'center'
          }}
        >
          <EmailIcon sx={{ fontSize: '14px', mr: 0.5 }} />
          <Typography variant="body2" sx={{ fontSize: '10px' }}>
            {email}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ContactText;
