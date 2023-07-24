import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
// import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
function NodeEchogenicFoci({ editObject }) {
  const [fociCount, setFociCount] = useState(0);

  const addFociCountToState = (e) => {
    if (e.target.checked) {
      let newFociCount = fociCount + Number(e.target.value);
      setFociCount(newFociCount);
    } else {
      let newFociCount = fociCount - Number(e.target.value);
      setFociCount(newFociCount);
    }
  };

  useEffect(() => {
    editObject('nodeEchogenicFoci', fociCount);
  }, [fociCount]);

  return (
    <>
      <Typography variant='h5'>Включения</Typography>
      <label htmlFor='nodeEchogenicFoci-none'>
        <input
          type='checkbox'
          name='nodeEchogenicFoci'
          id='nodeEchogenicFoci-none'
          value={0}
          onChange={(e) => {
            addFociCountToState(e);
          }}
          style={{
            marginRight: '10px',
          }}
        />
        Нет или большие артефакты по типу "хвоста кометы"
      </label>

      <label htmlFor='nodeEchogenicFoci-macrocalcifications'>
        <input
          type='checkbox'
          name='nodeEchogenicFoci'
          id='nodeEchogenicFoci-macrocalcifications'
          value={1}
          onChange={(e) => {
            addFociCountToState(e);
          }}
          style={{
            marginRight: '10px',
          }}
        />
        Макрокальцинаты
      </label>

      <label htmlFor='nodeEchogenicFoci-peripheral_calcifications'>
        <input
          type='checkbox'
          name='nodeEchogenicFoci'
          id='nodeEchogenicFoci-peripheral_calcifications'
          value={2}
          onChange={(e) => {
            addFociCountToState(e);
          }}
          style={{
            marginRight: '10px',
          }}
        />
        Периферическое обызвествление
      </label>

      <label htmlFor='nodeEchogenicFoci-microcalcifications'>
        <input
          type='checkbox'
          name='nodeEchogenicFoci'
          id='nodeEchogenicFoci-microcalcifications'
          value={3}
          onChange={(e) => {
            addFociCountToState(e);
          }}
          style={{
            marginRight: '10px',
          }}
        />
        Микрокальцинаты
      </label>
    </>
  );
}

export default NodeEchogenicFoci;
