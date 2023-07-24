// import "./Links.css";

import { Container, List, ListItem, Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Links() {
  const links = [
    {
      title:
        'Клинические рекомендации Дифференцированный рак щитовидной железы(скачивание pdf)',
      link: 'https://mosgorzdrav.ru/ru-RU/science/default/download/629.html',
    },
    {
      title:
        '2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4739132/pdf/thy.2015.0020.pdf',
    },
    {
      title:
        'AMERICAN ASSOCIATION OF CLINICAL ENDOCRINOLOGISTS, AMERICAN COLLEGE OF ENDOCRINOLOGY, AND ASSOCIAZIONE MEDICI ENDOCRINOLOGIMEDICAL GUIDELINES FOR CLINICAL PRACTICE FOR THE DIAGNOSIS AND OF THYROID NODULES – 2016 UPDATE APPENDIX',
      link: 'https://www.endocrinepractice.org/action/showPdf?pii=S1530-891X%2820%2942954-4',
    },
    {
      title: 'American College of Radiology(ACR-TIRADS)',
      link: 'https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/TI-RADS',
    },
  ];

  return (
    <Container sx={{ height: '100vh', marginTop: '100px' }}>
      <Typography variant='h3' component='h1'>
        Полезные ссылки
      </Typography>

      <List>
        {links.map((link) => (
          <ListItem key={link.link}>
            <Link
              href={link.title}
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              {link.title}{' '}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Links;
