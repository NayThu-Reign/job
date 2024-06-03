import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Industries() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px', // Adjust the height as needed
        backgroundColor: '#222', // Background color of the section
        clipPath: 'polygon(0 0, 100% 25%, 100% 85%, 0 100%)', // Creates a slanted top edge
        // clipPath: 'polygon(0 0, 20% 0, 100% 20px, 100% 100%, 0 100%)', // Creates a slanted top edge
        // clipPath: 'polygon(0 0, 100% 0, 100% 80%, 60% 100%, 40% 100%, 0 80%)', // Creates a slightly curved top edge

        padding: '20px',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#fff' }}>
        Industries I Work With
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        Here you can describe the various industries you work with.
      </Typography>
    </Box>
  );
}
