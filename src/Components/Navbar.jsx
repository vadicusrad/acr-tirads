import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from '../theme/ThemeSwitcher';

function Navbar() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Container>
          <Toolbar sx={{ padding: 0 }}>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ultrasound Assistant
            </Typography>

            <Box display={location.pathname === '/' ? 'none' : 'flex'}>
              <Button
                size='large'
                color='inherit'
                component={RouterLink}
                to='/'
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                  },
                }}
              >
                Выбрать инструмент
              </Button>
              <Button
                color='inherit'
                component={RouterLink}
                to='/'
                sx={{
                  display: {
                    sm: 'none',
                    xs: 'flex',
                  },
                }}
              >
                <MenuIcon />
              </Button>
            </Box>
            <ThemeSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
