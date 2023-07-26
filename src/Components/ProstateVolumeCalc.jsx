// import "./ProstateVolumeCalc.css";
import { useState } from 'react';
import QuestionIcon from './Icons/QuestionIcon/QuestionIcon';
import REFERENCEINFORMATION from './ReferenceInformation/ReferenceInformation';
// import ResetBtn from '../ResetBtn/ResetBtn';
import calcEllipseVolume from '../functions/calcEllipseVolume';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import FormWrapper from './FormWrapper';

function ProstateVolumeCalc() {
  const [prostateParams, setProstateParams] = useState({
    prostateHight: '',
    prostateWidth: '',
    prostateLength: '',
  });

  function handleSetState(e) {
    const name = e.target.name;
    const value = e.target.value;
    let newStateObj = Object.assign({}, prostateParams);
    newStateObj[name] = value;
    setProstateParams(newStateObj);
  }

  function resetState() {
    setProstateParams({
      prostateHight: '',
      prostateWidth: '',
      prostateLength: '',
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
        Расчет объема предстательной железы
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '20px 30px 40px 30px',
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
          {/* <QuestionIcon reference={REFERENCEINFORMATION.prostateVolumeCalc} /> */}

          <TextField
            name='prostateHight'
            value={prostateParams.prostateHight}
            type='number'
            onChange={(e) => handleSetState(e)}
            id='outlined-basic'
            label='Высота в мм'
            variant='filled'
          />
          <TextField
            type='number'
            value={prostateParams.prostateWidth}
            onChange={(e) => handleSetState(e)}
            name='prostateWidth'
            id='outlined-basic'
            label='Ширина в мм'
            variant='filled'
          />
          <TextField
            type='number'
            value={prostateParams.prostateLength}
            onChange={(e) => handleSetState(e)}
            name='prostateLength'
            id='outlined-basic'
            label='Длина в мм'
            variant='filled'
          />
        </Box>
        <Box>
          <Typography variant='h5' textAlign={'center'}>
            Объем железы:{' '}
            {calcEllipseVolume(
              prostateParams.prostateHight,
              prostateParams.prostateWidth,
              prostateParams.prostateLength
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

export default ProstateVolumeCalc;
