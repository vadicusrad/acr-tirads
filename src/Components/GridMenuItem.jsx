import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const GridMenuItem = ({ title, to }) => {
  return (
    <Card variant='outlined' sx={{ height: '150px' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardContent
          sx={{
            height: '100%',
          }}
        >
          <Typography
            variant='h5'
            component={RouterLink}
            to={to}
            color='inherit'
            textAlign={'center'}
            sx={{
              textDecoration: 'none',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GridMenuItem;
