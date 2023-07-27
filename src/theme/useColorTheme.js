import { createTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import theme from './theme';

const useColorTheme = () => {
  const savedMode = localStorage.getItem('mode')
    ? localStorage.getItem('mode')
    : 'dark';

  const [mode, setMode] = useState(savedMode);
  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode,
        },
      }),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export default useColorTheme;
