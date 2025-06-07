import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://juego-boardgames.vercel.app");
  }, []);
  return null;
}

export default App;
