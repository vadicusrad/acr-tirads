import { Container } from '@mui/material';
import MenuItem from './GridMenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import GridMenuItem from './GridMenuItem';
function Menu() {
  return (
    <Container sx={{ height: '100vh', marginTop: '120px' }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={4} md={4}>
          <GridMenuItem title='TIRADS' to='/tirads' />
        </Grid>
        <Grid xs={6} sm={8} md={4}>
          <GridMenuItem title='Объем щитовидной железы' to='/tireoid_volume' />
        </Grid>
        <Grid xs={6} sm={7} md={4}>
          <GridMenuItem title='Объем простаты' to='/prostate_volume' />
        </Grid>
        <Grid xs={6} sm={5} md={4}>
          <GridMenuItem title='Объем мочевого пузыря' to='/bladder_volume' />
        </Grid>
        <Grid xs={6} sm={6} md={4}>
          <GridMenuItem title='Индекс массы тела' to='/body_mass_index' />
        </Grid>
        <Grid xs={6} sm={6} md={4}>
          <GridMenuItem
            title='Площадь поверхности тела'
            to='/body_surface_area'
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Menu;
