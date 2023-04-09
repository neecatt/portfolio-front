import { useEffect, useState } from "react";
import Admin from "./pages/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
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
