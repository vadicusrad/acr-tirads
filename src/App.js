import "./App.css";
import { useEffect, useState } from "react";
import NodeComposition from "./Components/NodeComposition/NodeComposition";
import NodeEchogenicity from "./Components/NodeEchogenicity/NodeEchogenicity";
import NodeShape from "./Components/NodeShape/NodeShape";
import NodeMargin from "./Components/NodeMargin/NodeMargin";
import NodeEchogenicFoci from "./Components/NodeEchogenicFoci/NodeEchogenicFoci";
import NodeDescription from "./Components/NodeDescription/NodeDescription";

function App() {
  const [state, setState] = useState({
    nodeComposition: 0,
    nodeEchogenicity: 0,
    nodeShape: 0,
    nodeMargin: 0,
    nodeEchogenicFoci: 0,
  });
  const [compositionCount, setCompositionCount] = useState(0);

  const editObject = (name, value) => {
    const newObj = Object.assign({}, state);
    newObj[name] = Number(value);
    setState(newObj);
  };

  useEffect(() => {
    const pointsSum = Object.values(state).reduce(function (sum, currentValue) {
      return sum + currentValue;
    });
    setCompositionCount(pointsSum);
  });

  return (
    <div className="app">
      <h1>TI-RADS — диагностика узловых поражений щитовидной железы</h1>
      <div className="node">
        <NodeComposition editObject={editObject} />
        <NodeEchogenicity editObject={editObject} />
        <NodeShape editObject={editObject} />
        <NodeMargin editObject={editObject} />
        <NodeEchogenicFoci editObject={editObject} />
        <NodeDescription count={compositionCount} />
      </div>
    </div>
  );
}

export default App;