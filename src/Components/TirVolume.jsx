import { useState } from 'react';
import TirResultParams from './TirResultParams';
import QuestionIcon from './Icons/QuestionIcon/QuestionIcon';
import REFERENCEINFORMATION from './ReferenceInformation/ReferenceInformation';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import FormWrapper from './FormWrapper';

function TirVolume() {
  const [tirLinearParams, setTirLinearParams] = useState({
    isthmus: '',

    right_h: '',
    right_w: '',
    right_l: '',
    left_h: '',
    left_w: '',
    left_l: '',
  });

  const [tirVolume, setTirVolume] = useState({
    volRightLobe: 0,
    volLeftLobe: 0,
    sumVolume: 0,
  });

  function changeState(e) {
    const objName = e.target.name;
    const objValue = e.target.value;
    let newObj = Object.assign({}, tirLinearParams);
    newObj[objName] = objValue;
    setTirLinearParams(newObj);
  }
  function calcVolume(data) {
    const rightLobe = Number(
      ((data.right_h * data.right_w * data.right_l * 0.479) / 1000).toFixed(1)
    );

    const volLeftLobe = Number(
      ((data.left_h * data.left_w * data.left_l * 0.479) / 1000).toFixed(1)
    );
    const sumVolume = Number((rightLobe + volLeftLobe).toFixed(1));

    const volume = {
      volRightLobe: rightLobe,
      volLeftLobe,
      sumVolume,
    };

    return setTirVolume(volume);
  }

  function resetState() {
    setTirLinearParams({
      isthmus: '',

      right_h: '',
      right_w: '',
      right_l: '',
      left_h: '',
      left_w: '',
      left_l: '',
    });

    setTirVolume({ volRightLobe: 0, volLeftLobe: 0, sumVolume: 0 });
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
        Расчет объема щитовидной железы
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
          alignItems='center'
          gap={3}
          mt={2}
          position={'relative'}
        >
          <QuestionIcon reference={REFERENCEINFORMATION.tireoidVolume} />

          <TextField
            name='isthmus'
            value={tirLinearParams.isthmus}
            type='number'
            onChange={(e) => changeState(e)}
            label='Перешеек (мм)'
            variant='filled'
            sx={{ width: '150px' }}
            size='small'
          />

          <Box display={'flex'} gap={2}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
              <TextField
                name='right_h'
                value={tirLinearParams.right_h}
                type='number'
                onChange={(e) => changeState(e)}
                label='Высота правой доли (мм)'
                variant='filled'
                size='small'
              />

              <TextField
                name='right_w'
                value={tirLinearParams.right_w}
                type='number'
                onChange={(e) => changeState(e)}
                label='Ширина правой доли (мм)'
                variant='filled'
                size='small'
              />

              <TextField
                name='right_l'
                value={tirLinearParams.right_l}
                type='number'
                onChange={(e) => changeState(e)}
                label='Длина правой доли (мм)'
                variant='filled'
                size='small'
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
              <TextField
                name='left_h'
                value={tirLinearParams.left_h}
                type='number'
                onChange={(e) => changeState(e)}
                label='Высота левой доли (мм)'
                variant='filled'
                size='small'
              />

              <TextField
                name='left_w'
                value={tirLinearParams.left_w}
                type='number'
                onChange={(e) => changeState(e)}
                label='Ширина левой доли (мм)'
                variant='filled'
                size='small'
              />

              <TextField
                name='left_l'
                value={tirLinearParams.left_l}
                type='number'
                onChange={(e) => changeState(e)}
                label='Длина левой доли (мм)'
                variant='filled'
                size='small'
              />
            </Box>
          </Box>

          <Button
            size='medium'
            variant='contained'
            color='success'
            onClick={() => calcVolume(tirLinearParams)}
          >
            Рассчитать
          </Button>
        </Box>

        <TirResultParams
          tirVolume={tirVolume}
          tirLinearParams={tirLinearParams}
        />

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

export default TirVolume;
