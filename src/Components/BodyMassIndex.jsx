// import "./BodyMassIndex.css";
import { useState } from 'react';
import QuestionIcon from './Icons/QuestionIcon/QuestionIcon';
import REFERENCEINFORMATION from './ReferenceInformation/ReferenceInformation';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import FormWrapper from './FormWrapper';
// import ResetBtn from "../ResetBtn/ResetBtn";

function BodyMassIndex() {
  const [bodyParams, setBodyParams] = useState({ mass: '', height: '' });

  function bodyMassIndexCalc(mass, height) {
    const result = (mass / Math.pow(height / 100, 2)).toFixed(1);
    if (!isNaN(result) && isFinite(result)) {
      return result;
    }
    return 0;
  }

  function handleSetState(key, value) {
    const newStateObj = { ...bodyParams };
    newStateObj[key] = value;
    setBodyParams(newStateObj);
  }

  function resetState() {
    setBodyParams({ mass: '', height: '' });
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
        Расчет индекса массы тела
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '20px 40px 40px 40px',
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
          <QuestionIcon reference={REFERENCEINFORMATION.bodyMassIndex} />
          <TextField
            name='mass'
            type='number'
            onChange={(e) =>
              handleSetState(e.target.name, e.currentTarget.value)
            }
            value={bodyParams.mass}
            id='outlined-basic'
            label='Масса тела в кг'
            variant='filled'
          />
          <TextField
            name='height'
            type='number'
            onChange={(e) =>
              handleSetState(e.target.name, e.currentTarget.value)
            }
            value={bodyParams.height}
            id='outlined-basic'
            label='Рост в см'
            variant='filled'
          />
        </Box>
        <Box>
          <Typography variant='h5' textAlign={'center'}>
            Индекс массы тела:
            <br />
            {bodyMassIndexCalc(bodyParams.mass, bodyParams.height)}
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

export default BodyMassIndex;
