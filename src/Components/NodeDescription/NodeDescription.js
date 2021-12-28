function NodeDescription({ count }) {
  let tirads = 0;
  let descrText = "";
  if (count < 2) {
    tirads = 1;
    descrText = "Узел доброкачественный, без ТАБ";
  } else if (count === 2) {
    tirads = 2;
    descrText = "Узел доброкачественный, без ТАБ";
  } else if (count === 3) {
    tirads = 3;
    descrText =
      "Вероятность рака мала, ТАБ при узле 2.5см и более, УЗ контроль при узле размером 1,5см и более";
  } else if (count >= 4 && count <= 6) {
    tirads = 4;
    descrText =
      "Вероятность рака умеренная, ТАБ при узле 1,5см и более, УЗ контроль при узле размером 1см и более";
  } else if (count >= 7) {
    tirads = 5;
    descrText =
      "Вероятность рака значителная, ТАБ при узле 1см и более, УЗ контроль при узле размером 0.5см и более";
  }
  return (
    <div className="nodeCriterion nodeDescription">
      <h4>TIRADS {tirads}</h4>

      <p>{descrText}</p>
    </div>
  );
}

export default NodeDescription;
