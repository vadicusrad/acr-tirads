import { Container, List, ListItem, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { links } from '../data/links';

function Links() {
  return (
    <Container sx={{ height: '100vh', marginTop: '100px' }}>
      <Typography variant='h3' component='h1'>
        Полезные ссылки
      </Typography>

      <List>
        {links.map((link) => (
          <ListItem key={link.link}>
            <Link
              href={link.link}
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
