import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://juego-boardgames.vercel.app");
  }, []);

  return null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="/jurassic-islas" element={<JurassicIslas />} />
        <Route path="/dont-roll-back" element={<DontRollBack />} />
        <Route path="/ultime-victime" element={<UltimeVictime />} />
        <Route path="/monster-snacks" element={<MonsterSnacks />} />
        <Route path="/contact" element={<Contact />} />
*/}
        {/*path="*" va vers l'accueil si l'url n'est pas reconnu*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
