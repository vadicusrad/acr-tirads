import { Box, Typography } from '@mui/material';

function NodeDescription({ compositionCount }) {
  let tirads = 0;
  let descrText = '';
  if (compositionCount < 2) {
    tirads = 1;
    descrText = 'Узел доброкачественный, без ТАБ';
  } else if (compositionCount === 2) {
    tirads = 2;
    descrText = 'Узел доброкачественный, без ТАБ';
  } else if (compositionCount === 3) {
    tirads = 3;
    descrText =
      'Вероятность рака мала, ТАБ при узле 2.5см и более, УЗ контроль при узле размером 1,5см и более';
  } else if (compositionCount >= 4 && compositionCount <= 6) {
    tirads = 4;
    descrText =
      'Вероятность рака умеренная, ТАБ при узле 1,5см и более, УЗ контроль при узле размером 1см и более';
  } else if (compositionCount >= 7) {
    tirads = 5;
    descrText =
      'Вероятность рака значителная, ТАБ при узле 1см и более, УЗ контроль при узле размером 0.5см и более';
  }
  return (
    <>
      <Typography variant='h5'>
        Количество баллов {compositionCount} - ACR TIRADS {tirads}
      </Typography>

      <Typography variant='body2' fontSize={'18px'} mt={2}>
        {descrText}
      </Typography>
    </>
  );
}

export default NodeDescription;
