import { useState } from "react";
import "./TirVolume.css";
function TirVolume() {
  const [tirLinearParams, setTirLinearParams] = useState({
    isthmus: 1,

    right_h: 1,
    right_w: 1,
    right_l: 1,
    left_h: 1,
    left_w: 1,
    left_l: 1,
  });

  const [tirVolume, setTirVolume] = useState({
    volRightLobe: 0,
    volLeftLobe: 0,
    sumVolume: 0,
  });
  console.log(tirVolume);

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
    // const rightLobe = Number(
    //   ((data.right_h * data.right_w * data.right_l * 0.479) / 1000).toFixed(1)
    // );
    // console.log(typeof rightLobe);

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

  return (
    <div className="tirVolume">
      <h2>Расчет обьема щитовидной железы</h2>
      <div className="tirVolume-inputs">
        <label htmlFor="tirVolume-isthmus">
          Перешеек{" "}
          <input
            onChange={(e) => changeState(e)}
            name="isthmus"
            id="isthmus"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-rightLobe-h">
          Высота правой доли
          <input
            onChange={(e) => changeState(e)}
            name="right_h"
            id="tirVolume-rightLobe-h"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-rightLobe-w">
          Ширина правой доли
          <input
            onChange={(e) => changeState(e)}
            name="right_w"
            id="tirVolume-rightLobe-w"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-rightLobe-l">
          Длина правой доли
          <input
            onChange={(e) => changeState(e)}
            name="right_l"
            id="tirVolume-rightLobe-l"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-leftLobe-h">
          Высота левой доли
          <input
            onChange={(e) => changeState(e)}
            name="left_h"
            id="tirVolume-leftLobe-h"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-leftLobe-w">
          Ширина левой доли
          <input
            onChange={(e) => changeState(e)}
            name="left_w"
            id="tirVolume-leftLobe-w"
            type="number"
          />
          мм
        </label>
        <label htmlFor="tirVolume-leftLobe-l">
          Длина левой доли
          <input
            onChange={(e) => changeState(e)}
            name="left_l"
            id="tirVolume-leftLobe-l"
            type="number"
          />
          мм
        </label>
      </div>
      <button onClick={() => calcVolume(tirLinearParams)}>Рассчитать</button>
      <br />
      <div>
        <p>Перешеек {tirLinearParams.isthmus} мм</p>
        <p>Высота правой доли {tirLinearParams.right_h} мм</p>
        <p>Ширина правой доли {tirLinearParams.right_w} мм</p>
        <p>Длина правой доли {tirLinearParams.right_l} мм</p>
        <p>Обьем правой доли {tirVolume.volRightLobe}</p>
        <p>Высота левой доли {tirLinearParams.left_h} мм</p>
        <p>Ширина левой доли {tirLinearParams.left_w} мм</p>
        <p>Длина левой доли {tirLinearParams.left_l} мм</p>
        <p>Обьем левой доли {tirVolume.volLeftLobe}</p>
        <p>Общий обьем железы {tirVolume.sumVolume}</p>
      </div>
    </div>
  );
}

export default TirVolume;
