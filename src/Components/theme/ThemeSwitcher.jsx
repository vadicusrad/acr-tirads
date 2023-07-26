import React from 'react';
import { useThemeContext } from './ThemeContextProvider';
import { Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const ThemeSwitcher = () => {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <Box>
      <IconButton onClick={toggleColorMode} sx={{ ml: 1 }} color='inherit'>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default ThemeSwitcher;
