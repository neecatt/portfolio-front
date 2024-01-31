import { Box, Flex, Text, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Socials from "../../components/Socials";
import StartScreen from "../../components/StartScreen";
import borderBottomExpand from "../../props/borderBottomExpand";
import Frame from "../../components/Frame";
import Projects from "../Projects/Projects";
import Experience from "../Experience";
const Home = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const handleTabChange = (index: number) => {
    setShowStartScreen(false);
    setActiveTab(index);
    setPageTransitionOut(true); // Apply fade-out animation class
    setTimeout(() => {
      setActiveTab(index);
      setPageTransitionIn(true); // Apply fade-in animation class
    }, 500);
  };

  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [pageTransitionOut, setPageTransitionOut] = useState<boolean>(false);
  const [pageTransitionIn, setPageTransitionIn] = useState<boolean>(true);

  useEffect(() => {
    console.log(activeTab);
    const timeoutId = setTimeout(() => {
      setShowStartScreen(!showStartScreen);
      setShowHome(!showHome);
    }, 2600);
    setPageTransitionIn(false);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeTab]);

  return (
    <>
      {showStartScreen ? (
        <StartScreen />
      ) : (
        <Frame>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`${pageTransitionOut ? "animate__fadeOut" : ""} ${
              pageTransitionIn ? "animate__fadeIn" : ""
            }`}
          >
            <Tabs variant={"unstyled"} colorScheme={"none"}>
              <Navbar />
              <TabPanels>
                <TabPanel>
                  <Flex
                    height="100vh"
                    overflow="hidden"
                    overscrollBehavior={"none"}
                    className="animate__animated animate__fadeIn"
                    zIndex={-999}
                    px={4}
                  >
                    <Flex
                      justifyContent={"start"}
                      flexDirection="column"
                      py={"10rem"}
                      // border="1px solid blue"
                    >
                      <Box
                        fontSize={{ sm: "5xl", md: "7xl", base: "3xl" }}
                        display={"inline-block"}
                        fontWeight="light"
                      >
                        <motion.div
                          variants={typingContainer}
                          initial="hidden"
                          animate="show"
                        >
                          {Array.from("Nijat Abdullazada").map((word, i) => (
                            <motion.span key={i} variants={typingText}>
                              {word}
                            </motion.span>
                          ))}
                        </motion.div>
                      </Box>
                      <Box>
                        <Text
                          className="animate__animated animate__fadeIn animate__delay-1s"
                          fontSize={"3xl"}
                          display={"inline-block"}
                          fontWeight="lighter"
                          sx={{
                            "--animate-delay": "1.2s",
                          }}
                        >
                          Software Developer
                        </Text>
                      </Box>
                    </Flex>
                    <Socials />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Projects />
                </TabPanel>
                <TabPanel>
                  <Experience />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </motion.div>
        </Frame>
      )}
    </>
  );
};

export default Home;
