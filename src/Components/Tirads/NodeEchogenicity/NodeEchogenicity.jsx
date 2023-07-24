// import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
// import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import { Typography } from '@mui/material';

function NodeEchogenicity({ editObject }) {
  return (
    <>
      <Typography variant='h5'>Эхогенность</Typography>
      <label htmlFor='nodeEchogenicity-anechoic'>
        <input
          name='nodeEchogenicity'
          id='nodeEchogenicity-anechoic'
          type='radio'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Анэхогенный (0 баллов)
      </label>

      <label htmlFor='nodeEchogenicity-isoechoic'>
        <input
          name='nodeEchogenicity'
          id='nodeEchogenicity-isoechoic'
          type='radio'
          value={1}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Гипер или изоэхогенный (1 балл)
      </label>

      <label htmlFor='nodeEchogenicity-hypoechoic'>
        <input
          name='nodeEchogenicity'
          id='nodeEchogenicity-hypoechoic'
          type='radio'
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Гипоэхогенный (2 балла)
      </label>

      <label htmlFor='nodeEchogenicity-hyperechoic'>
        <input
          name='nodeEchogenicity'
          id='nodeEchogenicity-hyperechoic'
          type='radio'
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Выраженно гипоэхогенный (3 балла)
      </label>
    </>
  );
}
export default NodeEchogenicity;
