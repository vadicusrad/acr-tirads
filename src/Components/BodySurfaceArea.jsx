import React, { useState } from 'react';
import QuestionIcon from './Icons/QuestionIcon/QuestionIcon';
import REFERENCEINFORMATION from './ReferenceInformation/ReferenceInformation';
import calcBodySurfaceArea from '../functions/calcBodySurfaceArea';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import FormWrapper from './FormWrapper';

const BodySurfaceArea = () => {
  const [bodyParams, setBodyParams] = useState({
    mass: '',
    length: '',
    bodySurfArea: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const result = calcBodySurfaceArea(bodyParams.mass, bodyParams.length);

    setBodyParams({ ...bodyParams, bodySurfArea: result });
  }

  function clearResult() {
    setBodyParams({
      mass: '',
      length: '',
      bodySurfArea: 0,
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
        Расчет площади поверхности тела
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
          onSubmit={handleSubmit}
        >
          {/* <QuestionIcon reference={REFERENCEINFORMATION.bodySurfaceArea} /> */}

          <TextField
            name='body_length'
            value={bodyParams.length}
            type='number'
            onChange={(e) =>
              setBodyParams({
                ...bodyParams,
                length: e.target.value,
              })
            }
            id='outlined-basic'
            label='Рост в см'
            variant='filled'
          />

          <TextField
            name='body_mass'
            value={bodyParams.mass}
            type='number'
            onChange={(e) =>
              setBodyParams({
                ...bodyParams,
                mass: e.target.value,
              })
            }
            id='outlined-basic'
            label='Масса тела в кг'
            variant='filled'
          />
          <Box display={'flex'} gap={2}>
            <Button
              size='medium'
              variant='contained'
              color='success'
              type='submit'
            >
              Рассчитать
            </Button>
            <Button
              size='medium'
              variant='contained'
              color='error'
              onClick={clearResult}
            >
              Очистить
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography variant='h5' textAlign={'center'}>
            Результат:
            <br /> {bodyParams.bodySurfArea} кв.метров
          </Typography>
        </Box>
      </Paper>
    </FormWrapper>
  );
};

export default BodySurfaceArea;
