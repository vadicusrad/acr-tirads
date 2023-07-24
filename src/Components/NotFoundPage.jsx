import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <Container sx={{ height: '100vh', marginTop: '100px' }}>
      <Typography variant='h3' component='h1'>
        Страница не найдена
      </Typography>
      <br />
      <Typography variant='h5'>Неверный адрес ссылки.</Typography>
      <br />
      <Typography variant='h6'>
        Через 5 секунд вы будете перенаправлены на главную страницу.
      </Typography>
    </Container>
  );
}

export default NotFoundPage;
