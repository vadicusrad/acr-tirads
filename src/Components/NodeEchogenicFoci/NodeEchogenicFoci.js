function NodeEchogenicFoci({ editObject }) {
  return (
    <div className="nodeCriterion nodeEchogenicFoci">
      <h3>Включения</h3>

      <label htmlFor="nodeEchogenicFoci-none">
        <input
          type="radio"
          name="nodeEchogenicFoci"
          id="nodeEchogenicFoci-none"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Нет или большие артефакты по типу "хвоста кометы"
      </label>

      <label htmlFor="nodeEchogenicFoci-macrocalcifications">
        <input
          type="radio"
          name="nodeEchogenicFoci"
          id="nodeEchogenicFoci-macrocalcifications"
          value={1}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Макрокальцинаты
      </label>

      <label htmlFor="nodeEchogenicFoci-peripheral_calcifications">
        <input
          type="radio"
          name="nodeEchogenicFoci"
          id="nodeEchogenicFoci-peripheral_calcifications"
          value={2}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Периферическое обызвествление
      </label>

      <label htmlFor="nodeEchogenicFoci-microcalcifications">
        <input
          type="radio"
          name="nodeEchogenicFoci"
          id="nodeEchogenicFoci-microcalcifications"
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Микрокальцинаты
      </label>
    </div>
  );
}

export default NodeEchogenicFoci;
