import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Links from './Components/Links';
import Tirads from './Components/Tirads/Tirads';
import NotFoundPage from './Components/NotFoundPage';
import Layout from './Components/Layout';
import TirVolume from './Components/TirVolume';
import ProstateVolumeCalc from './Components/ProstateVolumeCalc';
import BodyMassIndex from './Components/BodyMassIndex';
import BladderVolume from './Components/BladderVolume';
import Menu from './Components/Menu';
import BodySurfaceArea from './Components/BodySurfaceArea';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path='tirads' element={<Tirads />} />
          <Route path='tireoid_volume' element={<TirVolume />} />
          <Route path='prostate_volume' element={<ProstateVolumeCalc />} />
          <Route path='bladder_volume' element={<BladderVolume />} />
          <Route path='body_mass_index' element={<BodyMassIndex />} />
          <Route path='body_surface_area' element={<BodySurfaceArea />} />
          <Route path='about' element={<About />} />
          <Route path='links' element={<Links />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
