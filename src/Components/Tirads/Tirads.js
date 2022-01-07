import NodeComposition from "../NodeComposition/NodeComposition";
import NodeEchogenicFoci from "../NodeEchogenicFoci/NodeEchogenicFoci";
import NodeEchogenicity from "../NodeEchogenicity/NodeEchogenicity";
import NodeShape from "../NodeShape/NodeShape";
import NodeMargin from "../NodeMargin/NodeMargin";
import NodeDescription from "../NodeDescription/NodeDescription";

function Tirads({ editObject, compositionCount }) {
  return (
    <div className="tirads">
      <h1>TI-RADS — диагностика узловых поражений щитовидной железы</h1>
      <div className="node">
        <NodeComposition editObject={editObject} />
        <NodeEchogenicity editObject={editObject} />
        <NodeShape editObject={editObject} />
        <NodeMargin editObject={editObject} />
        <NodeEchogenicFoci editObject={editObject} />
        <NodeDescription compositionCount={compositionCount} />
      </div>
    </div>
  );
}

export default Tirads;
