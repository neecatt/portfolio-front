import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import videoBg from "../../assets/videoBg.mp4";

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
    <Box border={"1px solid red"}>
      <Box
        display="flex"
        width="100%"
        height="100%"
        className="animate__animated animate__fadeIn"
      >
        <Box
          flex={1}
          position="fixed"
          width="100vw"
          height="100vh"
          overflow="hidden"
          zIndex="-999"
        >
          <video
            autoPlay
            loop
            muted
            src={videoBg}
            className="w-screen h-screen object-cover opacity-50"
          />
        </Box>
        <Box px={4} py={6}>
          <Flex justifyContent={"center"} flexDirection="column">
            <Box fontSize={"5xl"} display={"inline-block"} fontWeight="light">
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
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
