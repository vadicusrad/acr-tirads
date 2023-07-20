// import "./App.css";
import { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Links from './Components/Links/Links';
import Tirads from './Components/Tirads/Tirads';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Layout from './Components/Layout';
import TirVolume from './Components/TirVolume/TirVolume';
import ProstateVolumeCalc from './Components/ProstateVolumeCalc';
import BodyMassIndex from './Components/BodyMassIndex';
import BladderVolume from './Components/BladderVolume';
import Menu from './Components/Menu';
import BodySurfaceArea from './Components/BodySurfaceArea';

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
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path='tireoid_volume' element={<TirVolume />} />
          <Route path='prostate_volume' element={<ProstateVolumeCalc />} />
          <Route path='body_mass_index' element={<BodyMassIndex />} />
          <Route path='about' element={<About />} />
          <Route path='links' element={<Links />} />
          <Route path='bladder_volume' element={<BladderVolume />} />
          <Route path='body_surface_area' element={<BodySurfaceArea />} />
          <Route path='menu' element={<Menu />} />
          <Route
            path='tirads'
            element={
              <Tirads
                editObject={editObject}
                compositionCount={compositionCount}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
