import "./BladderVolume.css";
// import ResetBtn from "../ResetBtn/ResetBtn";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import QuestionIcon from "../Icons/QuestionIcon/QuestionIcon";
import { useState } from "react";
import calcEllipseVolume from "../../functions/calcEllipseVolume";


function BladderVolume() {
  const [bladderVolume, setBladderVolume] = useState({
    bladderHight: "",
    bladderWidth: "",
    bladderLength: "",
  });

  function handleSetState(e) {
    const name = e.target.name;
    const value = e.target.value;
    let newStateObj = Object.assign({}, bladderVolume);
    newStateObj[name] = value;
    setBladderVolume(newStateObj);
  }

  function resetState() {
    setBladderVolume({
      bladderHight: "",
      bladderWidth: "",
      bladderLength: "",
    });
  }

  return (
    <div className="component bladderVolume">
      <h2 className="component-title">Расчет объема мочевого пузыря</h2>
      <div className="bladderVolume-inputs">
        <QuestionIcon reference={REFERENCEINFORMATION.prostateVolumeCalc} />
        <span>
          <input
            placeholder="Высота"
            onChange={(e) => handleSetState(e)}
            name="bladderHight"
            id="bladderVolume-hight"
            type="number"
            value={bladderVolume.bladderHight}
          />{" "}
          мм
        </span>

        <span>
          <input
            placeholder="Ширина"
            onChange={(e) => handleSetState(e)}
            name="bladderWidth"
            id="bladderVolume-width"
            type="number"
            value={bladderVolume.bladderWidth}
          />{" "}
          мм
        </span>

        <span>
          {" "}
          <input
            placeholder="Длина"
            onChange={(e) => handleSetState(e)}
            name="bladderLength"
            id="bladderVolume-length"
            type="number"
            value={bladderVolume.bladderLength}
          />{" "}
          мм
        </span>
      </div>
      <div className="bladderVolume-result">
        <h3>
          Объем мочевого пузыря:{" "}
          {calcEllipseVolume(
            bladderVolume.bladderHight,
            bladderVolume.bladderWidth,
            bladderVolume.bladderLength
          )}{" "}
          см3
        </h3>
      </div>
      {/* <ResetBtn reset={resetState} /> */}
    </div>
  );
}

export default BladderVolume;
