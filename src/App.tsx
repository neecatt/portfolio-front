import { useEffect, useState } from "react";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "animate.css/animate.min.css";
import StartScreen from "./components/StartScreen";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartScreen(false);
      setShowHome(true);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <BrowserRouter>
      {showStartScreen && <StartScreen />}
      <div className="App">
        <Routes>
          {showHome && <Route path="/" element={<Home />}></Route>}
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
