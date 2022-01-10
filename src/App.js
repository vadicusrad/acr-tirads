import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Links from "./Components/Links/Links";
import Tirads from "./Components/Tirads/Tirads";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Layout from "./Components/Layout/Layout";

function App() {
  const [compositionCount, setCompositionCount] = useState(0);

  const [pointState, setPointState] = useState({
    nodeComposition: 0,
    nodeEchogenicity: 0,
    nodeShape: 0,
    nodeMargin: 0,
    nodeEchogenicFoci: 0,
  });

  const editObject = useCallback(
    (name, value) => {
      const newObj = Object.assign({}, pointState);
      newObj[name] = Number(value);
      setPointState(newObj);
    },
    [pointState]
  );

  // const editObject = (name, value) => {
  //   const newObj = Object.assign({}, pointState);
  //   newObj[name] = Number(value);
  //   setPointState(newObj);
  // };

  useEffect(() => {
    const pointsSum = Object.values(pointState).reduce(function (
      sum,
      currentValue
    ) {
      return sum + currentValue;
    });
    setCompositionCount(pointsSum);
  }, [pointState]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Tirads
                editObject={editObject}
                compositionCount={compositionCount}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="links" element={<Links />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
