import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import DontRollBack from './components/DontRollBack';
import Home from './components/Home';
import JurassicIslas from './components/JurassicIslas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jurassic-islas" element={<JurassicIslas />} />
        <Route path="/dont-roll-back" element={<DontRollBack />} />
        <Route path="/contact" element={<Contact />} />

        {/*path="*" va vers l'accueil si l'url n'est pas reconnu*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
