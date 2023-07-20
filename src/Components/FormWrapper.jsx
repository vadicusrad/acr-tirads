import { Container } from '@mui/material';
import React from 'react';

const FormWrapper = ({ children }) => {
  return (
    <Container
      sx={{
        height: '100vh',
        marginTop: {
          xs: '70px',
          sm: '100px',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {children}
    </Container>
  );
};

export default FormWrapper;
