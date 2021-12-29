import QuestionIcon from "../QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";

function NodeEchogenicity({ editObject }) {
  return (
    <div className="nodeCriterion nodeEchogenicity">
      <QuestionIcon reference={REFERENCEINFORMATION.echogenicity} />
      <h3>Эхогенность</h3>

      <label htmlFor="nodeEchogenicity-anechoic">
        <input
          name="nodeEchogenicity"
          id="nodeEchogenicity-anechoic"
          type="radio"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Анэхогенный
      </label>

      <label htmlFor="nodeEchogenicity-isoechoic">
        <input
          name="nodeEchogenicity"
          id="nodeEchogenicity-isoechoic"
          type="radio"
          value={1}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Гипер или изоэхогенный
      </label>

      <label htmlFor="nodeEchogenicity-hypoechoic">
        <input
          name="nodeEchogenicity"
          id="nodeEchogenicity-hypoechoic"
          type="radio"
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Гипоэхогенный
      </label>

      <label htmlFor="nodeEchogenicity-hyperechoic">
        <input
          name="nodeEchogenicity"
          id="nodeEchogenicity-hyperechoic"
          type="radio"
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Выраженно гиперэхогенный
      </label>
    </div>
  );
}
export default NodeEchogenicity;
