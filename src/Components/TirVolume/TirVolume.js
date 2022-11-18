import { useState } from "react";
import "./TirVolume.css";
import TirResultParams from "../TirResultParams/TirResultParams";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import ResetBtn from "../ResetBtn/ResetBtn";

function TirVolume() {
  const [tirLinearParams, setTirLinearParams] = useState({
    isthmus: "",

    right_h: "",
    right_w: "",
    right_l: "",
    left_h: "",
    left_w: "",
    left_l: "",
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

  function resetState() {
    setTirLinearParams({
      isthmus: "",

      right_h: "",
      right_w: "",
      right_l: "",
      left_h: "",
      left_w: "",
      left_l: "",
    });

    setTirVolume({ volRightLobe: 0, volLeftLobe: 0, sumVolume: 0 });
  }

  return (
    <div className="component tirVolume">
      <h2 className="component-title">Расчет объема щитовидной железы</h2>
      <div className="tirVolume-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.tireoidVolume} />
        <label htmlFor="tirVolume-isthmus">
          <span>Перешеек</span>
          <span>
            <input
              onChange={(e) => changeState(e)}
              name="isthmus"
              id="isthmus"
              type="number"
              value={tirLinearParams.isthmus}
              placeholder="мм"
            />
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
              value={tirLinearParams.right_h}
              placeholder="мм"
            />
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
              value={tirLinearParams.right_w}
              placeholder="мм"
            />
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
              value={tirLinearParams.right_l}
              placeholder="мм"
            />
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
              value={tirLinearParams.left_h}
              placeholder="мм"
            />
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
              value={tirLinearParams.left_w}
              placeholder="мм"
            />
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
              value={tirLinearParams.left_l}
              placeholder="мм"
            />
          </span>
        </label>
        <button
          onClick={() => calcVolume(tirLinearParams)}
          className="ok-btn"
        >
          Рассчитать
        </button>
      </div>

      <TirResultParams
        tirVolume={tirVolume}
        tirLinearParams={tirLinearParams}
      />

      <ResetBtn reset={resetState} />
    </div>
  );
}

export default TirVolume;
