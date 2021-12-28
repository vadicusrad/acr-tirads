function NodeShape({ editObject }) {
  return (
    <div className="nodeCriterion nodeShape">
      <h3>Форма</h3>

      <label htmlFor="nodeShape-wider">
        <input
          name="nodeShape"
          type="radio"
          id="nodeShape-wider"
          value={0}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Шире чем выше
      </label>

      <label htmlFor="nodeShape-taller">
        <input
          name="nodeShape"
          type="radio"
          id="nodeShape-taller"
          value={3}
          onClick={(e) => editObject(e.target.name, e.target.value)}
        />
        Выше чем шире
      </label>
    </div>
  );
}

export default NodeShape;
