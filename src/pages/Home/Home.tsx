import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Socials from "../../components/Socials";

const Home = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <>
      <Navbar />
      <Flex
        border={"1px solid gray"}
        height="100vh"
        overflow="hidden"
        overscrollBehavior={"none"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        className="animate__animated animate__fadeIn"
      >
        <Flex
          className="animate__animated animate__fadeIn"
          overflowY={"scroll"}
          height={"100vh"}
          ml={"1em"}
        >
          <Flex justifyContent={"center"} flexDirection="column">
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
                  "--animate-delay": "1.4s",
                }}
              >
                Web Developer
              </Text>
            </Box>
          </Flex>
          <Socials />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
