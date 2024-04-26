import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Socials from "../../components/Socials";
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          overflow="hidden"
          overscrollBehavior={"none"}
          className="animate__animated animate__fadeIn"
          zIndex={-999}
          px={4}
        >
          <Flex justifyContent={"start"} flexDirection="column" py={"10rem"}>
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
      </motion.div>
    </>
  );
};

export default Home;
