import { Container, Link, Typography } from '@mui/material';

function About() {
  return (
    <Container sx={{ height: '100vh', marginTop: '100px' }}>
      <Typography variant='h3' component='h1' mb={2}>
        О приложении
      </Typography>

      <Typography vadiant='body2'>
        Это мультитул для удобного ведения повседневных рутинных расчетов в
        практике врача ультразвуковой диагностики и врачей смежных
        специальностей.
      </Typography>
      <br />
      <Typography vadiant='body2'>
        На данном этапе приложение включает в себя калькулятор расчета риска
        злокачественности очаговых образований щитовидной железы по системе ACR
        TIRADS, инструменты для расчета объема щитовидной железы, предстательной
        железы, мочевого пузыря, расчета индекса массы тела, а также площади
        поверхности тела человека.
      </Typography>

      <Typography vadiant='body2'>
        В дальнейшем планируется добавление дополнительных инструментов.
      </Typography>
      <br />
      <Typography vadiant='body2'>
        Для предложений по добавлению и улучшению функционала можно написать в{' '}
        <Link
          target='_blank'
          rel='nofollow noopener noreferrer'
          href='https://t.me/Vadicus'
        >
          телеграм
        </Link>{' '}
        или на электронную почту{' '}
        <Link href='mailto:vadicus.rad@yandex.ru'>vadicus.rad@yandex.ru</Link>
      </Typography>
    </Container>
  );
}

export default About;
