import "./ResetBtn.css";

function ResetBtn({ reset }) {
  return (
    <button onClick={() => reset()} className="resetBtn">
      Очистить
    </button>
  );
}

export default ResetBtn;
