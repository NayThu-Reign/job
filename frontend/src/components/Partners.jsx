import React from "react";
import { Box, Typography } from "@mui/material";

export default function Partners() {
  return (
    <Box sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%', 
      clipPath: 'path("M 0 0 Q 100 100 600 0 L 600 425 L 0 500 Z")',

      // height: '100vh', 
      backgroundColor: '#000000' // Background for the entire page
    }}>
      <Box sx={{
        position: 'relative',
        width: '100%', // Make sure the inner box takes full width of its parent
        maxWidth: '100%',
        height: '500px', // Adjust height as needed
        backgroundColor: '#FFFFFF', // Background color for the container box
        borderRadius: '10px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        // clipPath: 'path("M 0 100 Q 300 0 600 100 L 600 500 L 0 500 Z")',
        // clipPath: 'path("M 0 0 Q 300 100 600 0 L 600 500 L 0 500 Z")',
        clipPath: 'path("M 0 0 Q 100 100 600 0 L 600 425 L 0 500 Z")',
        // clipPath: 'path("M 0 100 Q 300 0 600 100 L 600 500 L 0 500 Z")',
                overflow: 'hidden' // Ensure the SVG doesn't overflow the box
      }}>
       
        <Box sx={{ padding: '60px' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Inder', fontWeight: 'bold', marginBottom: '20px', color: '#1E3756' }}>
            OUR PRODUCTS
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', color: '#1E3756' }}>
            This is a description or any other component you want to add inside the box.
          </Typography>
          {/* Add more components here */}
        </Box>
      </Box>
    </Box>
  );
}
