// import "./BladderVolume.css";
// import ResetBtn from "../ResetBtn/ResetBtn";
import REFERENCEINFORMATION from './ReferenceInformation/ReferenceInformation';
import QuestionIcon from './Icons/QuestionIcon/QuestionIcon';
import { useState } from 'react';
import calcEllipseVolume from '../functions/calcEllipseVolume';
import FormWrapper from './FormWrapper';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

function BladderVolume() {
  const [bladderVolume, setBladderVolume] = useState({
    bladderHight: '',
    bladderWidth: '',
    bladderLength: '',
  });

  function handleSetState(e) {
    const name = e.target.name;
    const value = e.target.value;
    let newStateObj = Object.assign({}, bladderVolume);
    newStateObj[name] = value;
    setBladderVolume(newStateObj);
  }

  function resetState() {
    setBladderVolume({
      bladderHight: '',
      bladderWidth: '',
      bladderLength: '',
    });
  }

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
        Расчет объема мочевого пузыря
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '20px 20px 40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Box
          component='form'
          autoComplete='off'
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          mt={2}
          position={'relative'}
        >
          <QuestionIcon reference={REFERENCEINFORMATION.prostateVolumeCalc} />

          <TextField
            name='bladderHight'
            value={bladderVolume.bladderHight}
            type='number'
            onChange={(e) => handleSetState(e)}
            id='outlined-basic'
            label='Высота в мм'
            variant='filled'
          />
          <TextField
            type='number'
            value={bladderVolume.bladderWidth}
            onChange={(e) => handleSetState(e)}
            name='bladderWidth'
            id='outlined-basic'
            label='Ширина в мм'
            variant='filled'
          />

          <TextField
            type='number'
            value={bladderVolume.bladderLength}
            onChange={(e) => handleSetState(e)}
            name='bladderLength'
            id='outlined-basic'
            label='Длина в мм'
            variant='filled'
          />
        </Box>
        <Box>
          <Typography variant='h5' textAlign={'center'}>
            Объем мочевого пузыря:
            <br />
            {calcEllipseVolume(
              bladderVolume.bladderHight,
              bladderVolume.bladderWidth,
              bladderVolume.bladderLength
            )}{' '}
            см3
          </Typography>
        </Box>
        <Button
          size='medium'
          variant='contained'
          color='error'
          onClick={resetState}
        >
          Очистить
        </Button>
      </Paper>
    </FormWrapper>
  );
}

export default BladderVolume;
