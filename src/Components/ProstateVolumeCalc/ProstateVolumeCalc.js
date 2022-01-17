import "./ProstateVolumeCalc.css";
import CommonVolumeCalc from "../CommonVolumeCalc/CommonVolumeCalc";
import { useState } from "react";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";

function ProstateVolumeCalc() {
  const [prostateParams, setProstateParams] = useState({});

  function handleSetState(e) {
    const name = e.target.name;
    const value = e.target.value;
    let newStateObj = Object.assign({}, prostateParams);
    newStateObj[name] = value;
    setProstateParams(newStateObj);
  }

  return (
    <div className="component prostateVolumeCalc">
      <h2 className="component-title">Расчет объема предстательной железы</h2>

      <div className="prostateVolumeCalc-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.prostateVolumeCalc} />
        <label htmlFor="prostateVolumeCalc-hight">
          <span>Высота:</span>
          <span>
            <input
              onChange={(e) => handleSetState(e)}
              name="prostate-hight"
              id="prostateVolumeCalc-hight"
              type="number"
            />{" "}
            мм
          </span>
        </label>
        <label htmlFor="prostateVolumeCalc-width">
          <span>Ширина:</span>
          <span>
            <input
              onChange={(e) => handleSetState(e)}
              name="prostate-width"
              id="prostateVolumeCalc-width"
              type="number"
            />{" "}
            мм
          </span>
        </label>
        <label htmlFor="prostateVolumeCalc-length">
          <span>Длина:</span>
          <span>
            {" "}
            <input
              onChange={(e) => handleSetState(e)}
              name="prostate-length"
              id="prostateVolumeCalc-length"
              type="number"
            />{" "}
            мм
          </span>
        </label>
      </div>
      <div className="prostateVolumeCalc-result">
        <h3>Объем железы: {CommonVolumeCalc(prostateParams)} см3</h3>
      </div>
    </div>
  );
}

export default ProstateVolumeCalc;
