import "./BodyMassIndex.css";
import { useState } from "react";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
// import ResetBtn from "../ResetBtn/ResetBtn";

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
  }

  return (
    <div className="component bodyMassIndex">
      <h2 className="component-title">Расчет индекса массы тела</h2>
      <div className="bodyMassIndex-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.bodyMassIndex} />
        <span>
          <input
            placeholder="Масса тела в кг"
            name="mass"
            id="bodyMassIndex-mass"
            type="number"
            onChange={(e) =>
              handleSetState(e.target.name, e.currentTarget.value)
            }
            value={bodyParams.mass}
          />
        </span>
        <span>
          <input
            placeholder="Рост в см"
            name="height"
            id="bodyMassIndex-height"
            type="number"
            onChange={(e) =>
              handleSetState(e.target.name, e.currentTarget.value)
            }
            value={bodyParams.height}
          />
        </span>
      </div>
      <div className="bodyMassIndex-result">
        <h3>
          Индекс массы тела:{" "}
          {bodyMassIndexCalc(bodyParams.mass, bodyParams.height)}
        </h3>
      </div>
      {/* <ResetBtn reset={resetState} /> */}
    </div>
  );
}

export default BodyMassIndex;
