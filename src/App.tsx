import "animate.css/animate.min.css";
import BackgroundVideo from "./components/BackgroundVideo";
import Frame from "./components/Frame";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import AppRoutes from "./components/Routes";
import { Flex } from "@chakra-ui/react";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartScreen(!showStartScreen);
      setShowHome(!showHome);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Flex>
      {showStartScreen ? (
        <StartScreen />
      ) : (
        <Frame>
          <BackgroundVideo />

          <div className="h-[3.8rem]">
            <Navbar />
          </div>
          <div className="h-auto">
            <AppRoutes />
          </div>
        </Frame>
      )}
    </Flex>
  );
}

export default App;
