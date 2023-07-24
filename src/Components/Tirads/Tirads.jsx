import FormWrapper from '../FormWrapper';
import { Grid, Typography } from '@mui/material';
import NodeComposition from './NodeComposition/NodeComposition';
import NodeEchogenicity from './NodeEchogenicity/NodeEchogenicity';
import NodeShape from './NodeShape/NodeShape';
import NodeMargin from './NodeMargin/NodeMargin';
import NodeEchogenicFoci from './NodeEchogenicFoci/NodeEchogenicFoci';
import NodeDescription from './NodeDescription/NodeDescription';
import TiradsCard from './TiradsCard';
import { useCallback, useEffect, useState } from 'react';

function Tirads() {
  const [compositionCount, setCompositionCount] = useState(0);

  const [pointState, setPointState] = useState({
    nodeComposition: 0,
    nodeEchogenicity: 0,
    nodeShape: 0,
    nodeMargin: 0,
    nodeEchogenicFoci: 0,
  });

  const editObject = useCallback(
    (name, value) => {
      const newObj = Object.assign({}, pointState);
      newObj[name] = Number(value);
      setPointState(newObj);
    },
    [pointState]
  );

  useEffect(() => {
    const pointsSum = Object.values(pointState).reduce(function (
      sum,
      currentValue
    ) {
      return sum + currentValue;
    });
    setCompositionCount(pointsSum);
  }, [pointState]);
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
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeComposition editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeEchogenicity editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeShape editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeMargin editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeEchogenicFoci editObject={editObject} />
          </TiradsCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TiradsCard>
            <NodeDescription compositionCount={compositionCount} />
          </TiradsCard>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default Tirads;
