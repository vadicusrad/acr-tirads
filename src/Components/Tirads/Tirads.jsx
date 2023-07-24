import FormWrapper from '../FormWrapper';
import { Card, Grid, Typography } from '@mui/material';
import NodeComposition from './NodeComposition/NodeComposition';
import NodeEchogenicity from './NodeEchogenicity/NodeEchogenicity';
import NodeShape from './NodeShape/NodeShape';
import NodeMargin from './NodeMargin/NodeMargin';
import NodeEchogenicFoci from './NodeEchogenicFoci/NodeEchogenicFoci';
import NodeDescription from './NodeDescription/NodeDescription';
import TiradsCard from './TiradsCard';

function Tirads({ editObject, compositionCount }) {
  return (
    <FormWrapper>
      <Typography
        textAlign={'center'}
        variant='h4'
        sx={{
          fontSize: {
            xs: '25px',
            sm: '30px',
          },
        }}
      >
        ACR TI-RADS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeComposition editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeEchogenicity editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeShape editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeMargin editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeEchogenicFoci editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
          <TiradsCard>
            <NodeDescription compositionCount={compositionCount} />
          </TiradsCard>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default Tirads;
