import { useEffect, useState } from "react";
import Admin from "./pages/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "animate.css/animate.min.css";
import StartScreen from "./components/StartScreen";
import Frame from "./components/Frame";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartScreen(false);
      setShowHome(true);
    }, 2600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <BrowserRouter>
      <Frame>
        <BackgroundVideo />

        <div className="App">
          <Routes>
            {showHome && <Route path="/" element={<Home />}></Route>}
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </div>
      </Frame>

      {showStartScreen && <StartScreen />}
    </BrowserRouter>
  );
}

export default App;
