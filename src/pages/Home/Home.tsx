import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <Box
      display="flex"
      border={"1px solid white"}
      width="100wv"
      height={"100vh"}
      margin="0"
      padding="0"
      boxSizing="border-box"
    >
      <Box px={4} py={6}>
        <Flex justifyContent={"center"} flexDirection="column">
          <Box fontSize={"5xl"} display={"inline-block"}>
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
            className="animate__animated animate__fadeIn animate__delay-2s"
            fontSize={"3xl"}
            display={"inline-block"}
          >
            Web Developer
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
