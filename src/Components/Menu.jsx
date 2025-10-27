import { Container } from "@mui/material";
import MenuItem from "./GridMenuItem";
import Grid from "@mui/material/Grid";
import GridMenuItem from "./GridMenuItem";
function Menu() {
  return (
    <Container sx={{ height: "100vh", marginTop: "120px" }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <GridMenuItem title="TIRADS" to="/tirads" />
        </Grid>
        <Grid size={6}>
          <GridMenuItem title="Объем щитовидной железы" to="/tireoid_volume" />
        </Grid>
        <Grid size={6}>
          <GridMenuItem title="Объем простаты" to="/prostate_volume" />
        </Grid>
        <Grid size={6}>
          <GridMenuItem title="Объем мочевого пузыря" to="/bladder_volume" />
        </Grid>
        <Grid size={6}>
          <GridMenuItem title="Индекс массы тела" to="/body_mass_index" />
        </Grid>
        <Grid size={6}>
          <GridMenuItem
            title="Площадь поверхности тела"
            to="/body_surface_area"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Menu;
