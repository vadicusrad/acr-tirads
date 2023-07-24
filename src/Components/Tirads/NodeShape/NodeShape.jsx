// import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
// import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import { Typography } from '@mui/material';

function NodeShape({ editObject }) {
  return (
    <>
      <Typography variant='h5'>Форма</Typography>
      <label htmlFor='nodeShape-wider'>
        <input
          name='nodeShape'
          type='radio'
          id='nodeShape-wider'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Шире чем выше (0 баллов)
      </label>
      <label htmlFor='nodeShape-taller'>
        <input
          name='nodeShape'
          type='radio'
          id='nodeShape-taller'
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Выше чем шире (3 балла)
      </label>
    </>
  );
}

export default NodeShape;
