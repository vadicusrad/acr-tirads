import { Typography } from '@mui/material';

function NodeComposition({ editObject }) {
  return (
    <>
      <Typography variant='h5'>Эхоструктура</Typography>
      <label htmlFor='nodeComposition-cystic'>
        <input
          name='nodeComposition'
          id='nodeComposition-cystic'
          type='radio'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Кистозная (0 баллов)
      </label>

      <label htmlFor='nodeComposition-spongform'>
        <input
          name='nodeComposition'
          id='nodeComposition-spongform'
          type='radio'
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Губчатая (0 баллов)
      </label>

      <label htmlFor='nodeComposition-mixed'>
        <input
          name='nodeComposition'
          id='nodeComposition-mixed'
          type='radio'
          value={1}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Кистозно-солидная (1 балл)
      </label>

      <label htmlFor='nodeComposition-solid'>
        <input
          name='nodeComposition'
          id='nodeComposition-solid'
          type='radio'
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Солидная (2 балла)
      </label>
    </>
  );
}

export default NodeComposition;
