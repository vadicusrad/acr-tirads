import { useState } from "react";
import "./TirVolume.css";
import TirResultParams from "../TirResultParams/TirResultParams";
function TirVolume() {
  const [tirLinearParams, setTirLinearParams] = useState({
    isthmus: 0,

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
      <h2 className="component-title">Расчет объема щитовидной железы</h2>
      <div className="tirVolume-inputs">
        <label htmlFor="tirVolume-isthmus">
          <span>Перешеек</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="isthmus"
              id="isthmus"
              type="number"
            />
            мм
          </span>
        </label>
        <hr />
        <label htmlFor="tirVolume-rightLobe-h">
          <span>Высота правой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="right_h"
              id="tirVolume-rightLobe-h"
              type="number"
            />
            мм
          </span>
        </label>
        <label htmlFor="tirVolume-rightLobe-w">
          <span>Ширина правой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="right_w"
              id="tirVolume-rightLobe-w"
              type="number"
            />
            мм
          </span>
        </label>
        <label htmlFor="tirVolume-rightLobe-l">
          <span>Длина правой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="right_l"
              id="tirVolume-rightLobe-l"
              type="number"
            />
            мм
          </span>
        </label>
        <hr />
        <label htmlFor="tirVolume-leftLobe-h">
          <span>Высота левой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="left_h"
              id="tirVolume-leftLobe-h"
              type="number"
            />
            мм
          </span>
        </label>
        <label htmlFor="tirVolume-leftLobe-w">
          <span>Ширина левой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="left_w"
              id="tirVolume-leftLobe-w"
              type="number"
            />
            мм
          </span>
        </label>
        <label htmlFor="tirVolume-leftLobe-l">
          <span>Длина левой доли</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="left_l"
              id="tirVolume-leftLobe-l"
              type="number"
            />
            мм
          </span>
        </label>
        <button
          onClick={() => calcVolume(tirLinearParams)}
          className="tirVolume-calcBtn"
        >
          Рассчитать
        </button>
      </div>

      <TirResultParams
        tirVolume={tirVolume}
        tirLinearParams={tirLinearParams}
      />
    </div>
  );
}

export default TirVolume;
