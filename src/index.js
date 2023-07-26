import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeContextProvider } from './Components/theme/ThemeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CssBaseline /> */}
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
