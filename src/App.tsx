import "animate.css/animate.min.css";
import {
  BackgroundVideo,
  Frame,
  Navbar,
  StartScreen,
  AppRoutes,
} from "./components";
import { useEffect, useState } from "react";
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
