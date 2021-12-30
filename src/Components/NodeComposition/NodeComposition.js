import QuestionIcon from "../QuestionIcon/QuestionIcon";
import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";

function NodeComposition({ editObject }) {
  return (
    <div className="nodeCriterion nodeComposition">
      <QuestionIcon reference={REFERENCEINFORMATION.composition} />
      <h3>Эхоструктура</h3>

      <label htmlFor="nodeComposition-cystic">
        <input
          name="nodeComposition"
          id="nodeComposition-cystic"
          type="radio"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Кистозная
      </label>

      <label htmlFor="nodeComposition-spongform">
        <input
          name="nodeComposition"
          id="nodeComposition-spongform"
          type="radio"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Губчатая
      </label>

      <label htmlFor="nodeComposition-mixed">
        <input
          name="nodeComposition"
          id="nodeComposition-mixed"
          type="radio"
          value={1}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Кистозно-солидная
      </label>

      <label htmlFor="nodeComposition-solid">
        <input
          name="nodeComposition"
          id="nodeComposition-solid"
          type="radio"
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Солидная
      </label>
    </div>
  );
}

export default NodeComposition;
