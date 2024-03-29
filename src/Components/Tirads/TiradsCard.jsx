import { Box, Card } from '@mui/material';
import React from 'react';

const TiradsCard = ({ children }) => {
  return (
    <Card variant='outlined' sx={{ minHeight: '170px', padding: '20px' }}>
      {/* <QuestionIcon reference={REFERENCEINFORMATION.shape} /> */}
      <Box display={'flex'} flexDirection={'column'}>
        {children}
      </Box>
    </Card>
  );
};

export default TiradsCard;
