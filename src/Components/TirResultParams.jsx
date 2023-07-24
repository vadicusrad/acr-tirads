import { Box, Typography } from '@mui/material';

function TirResultParams({ tirVolume, tirLinearParams }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
    >
      <Typography variant='body1'>
        Перешеек {tirLinearParams.isthmus} мм
      </Typography>
      <Box display={'flex'} justifyContent={'space-between'} gap={3}>
        <Box>
          <Typography variant='body1'>
            Высота правой доли {tirLinearParams.right_h} мм
          </Typography>
          <Typography variant='body1'>
            Ширина правой доли {tirLinearParams.right_w} мм
          </Typography>
          <Typography variant='body1'>
            Длина правой доли {tirLinearParams.right_l} мм
          </Typography>
          <br />
          <Typography variant='body1'>
            Обьем правой доли: {tirVolume.volRightLobe} см3
          </Typography>
        </Box>
        <Box>
          <Typography variant='body1'>
            Высота левой доли {tirLinearParams.left_h} мм
          </Typography>
          <Typography variant='body1'>
            Ширина левой доли {tirLinearParams.left_w} мм
          </Typography>
          <Typography variant='body1'>
            Длина левой доли {tirLinearParams.left_l} мм
          </Typography>
          <br />
          <Typography variant='body1'>
            Обьем левой доли: {tirVolume.volLeftLobe} см3
          </Typography>
        </Box>
      </Box>
      <Typography variant='h6' textAlign={'center'}>
        Общий обьем железы: {tirVolume.sumVolume} см3
      </Typography>
    </Box>
  );
}

export default TirResultParams;
