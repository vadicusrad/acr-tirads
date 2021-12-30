import REFERENCEINFORMATION from "../ReferenceInformation/ReferenceInformation";
import QuestionIcon from "../QuestionIcon/QuestionIcon";
function NodeMargin({ editObject }) {
  return (
    <div className="nodeCriterion nodeMargin">
      <QuestionIcon reference={REFERENCEINFORMATION.margin} />
      <h3>Контур</h3>

      <label htmlFor="nodeMargin-smooth">
        <input
          type="radio"
          id="nodeMargin-smooth"
          name="nodeMargin"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Ровный
      </label>

      <label htmlFor="nodeMargin-undefined">
        <input
          type="radio"
          id="nodeMargin-undefined"
          name="nodeMargin"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Не определяется
      </label>

      <label htmlFor="nodeMargin-irregular">
        <input
          type="radio"
          id="nodeMargin-irregular"
          name="nodeMargin"
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Неровный или дольчатый
      </label>

      <label htmlFor="nodeMargin-extratireoid_extention">
        <input
          type="radio"
          id="nodeMargin-extratireoid_extention"
          name="nodeMargin"
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Экстратиреоидное распространение
      </label>
    </div>
  );
}

export default NodeMargin;
