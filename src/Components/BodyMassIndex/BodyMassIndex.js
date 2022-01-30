import "./BodyMassIndex.css";
import { useState } from "react";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";

function BodyMassIndex() {
  const [bodyParams, setBodyParams] = useState({ mass: "", height: "" });

  function bodyMassIndexCalc(mass, height) {
    const result = (mass / Math.pow(height / 100, 2)).toFixed(1);
    if (!isNaN(result) && isFinite(result)) {
      return result;
    }
    return 0;
  }

  function handleSetState(key, value) {
    const newStateObj = { ...bodyParams };
    newStateObj[key] = value;
    setBodyParams(newStateObj);
  }

  function resetState() {
    setBodyParams({ mass: "", height: "" });

    // bodyMassIndexCalc(1, 1);
  }

  return (
    <div className="component bodyMassIndex">
      <h2 className="component-title">Расчет индекса массы тела</h2>
      <div className="bodyMassIndex-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.bodyMassIndex} />
        <input
          placeholder="Масса тела в кг"
          name="mass"
          id="bodyMassIndex-mass"
          type="number"
          onChange={(e) => handleSetState(e.target.name, e.currentTarget.value)}
          value={bodyParams.mass}
        />

        <input
          placeholder="Рост в см"
          name="height"
          id="bodyMassIndex-height"
          type="number"
          onChange={(e) => handleSetState(e.target.name, e.currentTarget.value)}
          value={bodyParams.height}
        />
      </div>
      <div className="bodyMassIndex-result">
        <h3>
          Индекс массы тела:{" "}
          {bodyMassIndexCalc(bodyParams.mass, bodyParams.height)}
        </h3>
        <button onClick={() => resetState()} className="bodyMassIndex-resetBtn">
          Очистить
        </button>
      </div>
    </div>
  );
}

export default BodyMassIndex;
