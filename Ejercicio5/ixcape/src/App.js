// App.js
import './App.css';
import HomePage from './home/home';
import DatosPago from './datosPago/datosPago';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comunidad from './comunidad/comunidad';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datos-pago" element={<DatosPago />} />
          <Route path='/comunidad' element={<Comunidad/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
