import Admin from "./pages/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "animate.css/animate.min.css";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <BrowserRouter>
      <BackgroundVideo />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          {/* <Route path="/projects" element={<Projects />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
