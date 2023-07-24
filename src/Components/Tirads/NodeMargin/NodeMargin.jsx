// import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import { Typography } from '@mui/material';
// import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
function NodeMargin({ editObject }) {
  return (
    <>
      <Typography variant='h5'>Контур</Typography>
      <label htmlFor='nodeMargin-smooth'>
        <input
          type='radio'
          id='nodeMargin-smooth'
          name='nodeMargin'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Ровный (0 баллов)
      </label>

      <label htmlFor='nodeMargin-undefined'>
        <input
          type='radio'
          id='nodeMargin-undefined'
          name='nodeMargin'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Не определяется (0 баллов)
      </label>

      <label htmlFor='nodeMargin-irregular'>
        <input
          type='radio'
          id='nodeMargin-irregular'
          name='nodeMargin'
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Неровный или дольчатый (2 балла)
      </label>

      <label htmlFor='nodeMargin-extratireoid_extention'>
        <input
          type='radio'
          id='nodeMargin-extratireoid_extention'
          name='nodeMargin'
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Экстратиреоидное распространение (3 балла)
      </label>
    </>
  );
}

export default NodeMargin;
