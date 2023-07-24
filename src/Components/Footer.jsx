import { Link as RouterLink } from 'react-router-dom';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Container, Link, Typography } from '@mui/material';
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#263238',
        paddingTop: '50px',
        paddingBottom: '30px',
      }}
    >
      <Container>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          mb={6}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
            gap: {
              xs: '20px',
              sm: '20px',
              md: '0px',
            },
          }}
        >
          <Box>
            <Typography
              variant='h4'
              color={'white'}
              sx={{
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Ultrasound Assistant
            </Typography>
          </Box>
          <Box
            display={'flex'}
            gap={3}
            sx={{
              flexDirection: {
                // xs: 'column',
                sm: 'row',
                md: 'column',
              },
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Box display={'flex'} alignItems={'center'} color={'white'}>
              <LinkIcon />
              <Typography
                component={RouterLink}
                to='/links'
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  marginLeft: '10px',
                }}
              >
                Ссылки
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} color={'white'}>
              <InfoIcon />
              <Typography
                component={RouterLink}
                to='/about'
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  marginLeft: '10px',
                }}
              >
                О приложении
              </Typography>
            </Box>
          </Box>

          <Box
            display={'flex'}
            gap={3}
            sx={{
              flexDirection: {
                xs: 'column',
                sm: 'row',
                md: 'column',
              },
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
              },
              alignItems: {
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Box display={'flex'} alignItems={'center'} color={'white'}>
              <TelegramIcon />
              <Link
                target='_blank'
                rel='nofollow noopener noreferrer'
                href='https://t.me/Vadicus'
                sx={{
                  color: 'white',
                  marginLeft: '10px',
                }}
              >
                Написать в телеграм
              </Link>
            </Box>

            <Box display={'flex'} alignItems={'center'} color={'white'}>
              <MailOutlineIcon />
              <Link
                href='mailto:vadicus.rad@yandex.ru'
                sx={{
                  color: 'white',
                  marginLeft: '10px',
                }}
              >
                Написать емейл
              </Link>
            </Box>
          </Box>
        </Box>

        <br />
        <Box>
          <Typography textAlign={'center'} sx={{ color: 'white' }}>
            Made with hate and love by{' '}
            <Link
              target='_blank'
              rel='nofollow noopener noreferrer'
              href='https://t.me/Vadicus'
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Vadicus
            </Link>
          </Typography>

          <Typography textAlign={'center'} sx={{ color: 'white' }}>
            2021 - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
