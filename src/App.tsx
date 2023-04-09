import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Admin from "./pages/Admin/Admin";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import StartScreen from "./components/StartScreen";
import "animate.css/animate.min.css";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartScreen(false);
    }, 3700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <BrowserRouter>
      {/* {showStartScreen && <StartScreen />} */}
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
