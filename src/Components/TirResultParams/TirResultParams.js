import "./TirResultParams.css";
function TirResultParams({ tirVolume, tirLinearParams }) {
  return (
    <div className="tirResult">
      <div className="tirResult-isthmus">
        Перешеек {tirLinearParams.isthmus} мм
      </div>
      <div className="tirResult-lobes">
        <div className="tirResult-rightLobe">
          <p>Высота правой доли {tirLinearParams.right_h} мм</p>
          <p>Ширина правой доли {tirLinearParams.right_w} мм</p>
          <p>Длина правой доли {tirLinearParams.right_l} мм</p>
          <p>Обьем правой доли {tirVolume.volRightLobe} см3</p>
        </div>
        <div className="tirResult-leftLobe">
          <p>Высота левой доли {tirLinearParams.left_h} мм</p>
          <p>Ширина левой доли {tirLinearParams.left_w} мм</p>
          <p>Длина левой доли {tirLinearParams.left_l} мм</p>
          <p>Обьем левой доли {tirVolume.volLeftLobe} см3</p>
        </div>
      </div>
      <div className="tirResult-sumVolume">
        Общий обьем железы {tirVolume.sumVolume} см3
      </div>
    </div>
  );
}

export default TirResultParams;
