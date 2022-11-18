import "./ProstateVolumeCalc.css";
import { useState } from "react";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import ResetBtn from "../ResetBtn/ResetBtn";
import calcEllipseVolume from "../../functions/calcEllipseVolume";


function ProstateVolumeCalc() {
  const [prostateParams, setProstateParams] = useState({
    prostateHight: "",
    prostateWidth: "",
    prostateLength: "",
  });

  function handleSetState(e) {
    const name = e.target.name;
    const value = e.target.value;
    let newStateObj = Object.assign({}, prostateParams);
    newStateObj[name] = value;
    setProstateParams(newStateObj);
  }

  function resetState() {
    setProstateParams({
      prostateHight: "",
      prostateWidth: "",
      prostateLength: "",
    });
  }

  return (
    <div className="component prostateVolumeCalc">
      <h2 className="component-title">Расчет объема предстательной железы</h2>

      <div className="prostateVolumeCalc-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.prostateVolumeCalc} />

        <span>
          <input
            placeholder="Высота"
            onChange={(e) => handleSetState(e)}
            name="prostateHight"
            id="prostateVolumeCalc-hight"
            type="number"
            value={prostateParams.prostateHight}
          />{" "}
          мм
        </span>

        <span>
          <input
            placeholder="Ширина"
            onChange={(e) => handleSetState(e)}
            name="prostateWidth"
            id="prostateVolumeCalc-width"
            type="number"
            value={prostateParams.prostateWidth}
          />{" "}
          мм
        </span>

        <span>
          {" "}
          <input
            placeholder="Длина"
            onChange={(e) => handleSetState(e)}
            name="prostateLength"
            id="prostateVolumeCalc-length"
            type="number"
            value={prostateParams.prostateLength}
          />{" "}
          мм
        </span>
      </div>
      <div className="prostateVolumeCalc-result">
        <h3>
          Объем железы:{" "}
          {calcEllipseVolume(
            prostateParams.prostateHight,
            prostateParams.prostateWidth,
            prostateParams.prostateLength
          )}{" "}
          см3
        </h3>
      </div>
      <ResetBtn reset={resetState} />
    </div>
  );
}

export default ProstateVolumeCalc;
