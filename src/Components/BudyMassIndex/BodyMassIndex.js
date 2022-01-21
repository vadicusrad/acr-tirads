import "./BodyMassIndex.css";
import { useState } from "react";

function BodyMassIndex() {
  const [bodyParams, setBodyParams] = useState({ mass: 0, height: 1 });

  function bodyMassIndexCalc(mass, height) {
    const result = (mass / Math.pow(height / 100, 2)).toFixed(1);
    return result;
  }

  function handleSetState(key, value) {
    const newStateObj = { ...bodyParams };
    newStateObj[key] = value;
    setBodyParams(newStateObj);
  }

  return (
    <div className="component bodyMassIndex">
      <h2 className="component-title">Расчет индекса массы тела</h2>
      <div className="bodyMassIndex-inputs">
        <input
          placeholder="Масса тела в кг"
          name="mass"
          id="bodyMassIndex-mass"
          type="number"
          onChange={(e) => handleSetState(e.target.name, e.currentTarget.value)}
        />

        <input
          placeholder="Рост в см"
          name="height"
          id="bodyMassIndex-height"
          type="number"
          onChange={(e) => handleSetState(e.target.name, e.currentTarget.value)}
        />
      </div>
      <div className="bodyMassIndex-result">
        {`Индекс массы тела: ${bodyMassIndexCalc(
          bodyParams.mass,
          bodyParams.height
        )}`}
      </div>
    </div>
  );
}

export default BodyMassIndex;
