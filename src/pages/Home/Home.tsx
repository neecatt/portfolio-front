import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { AIInteractive } from "../../components/AIInteractive";
import { TerminalEffect } from "../../components/TerminalEffect";
import Lottie from "lottie-react";
import cookingAnimation from "../../assets/animations/cooking.json";
import { Socials } from "../../components";

const Home = () => {
  const controls = useAnimation();

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

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
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
        position="relative"
        minH="100vh"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flex="1"
          justifyContent={"start"}
          flexDirection="column"
          py={{ base: "4rem", md: "8rem" }}
          mt={{ base: 0, md: 0 }}
          position="relative"
          zIndex={2}
        >
          <Box
            fontSize={{ base: "2xl", sm: "4xl", md: "7xl", "2xl": "8xl" }}
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
              fontSize={{ base: "xl", sm: "2xl", md: "3xl", "2xl": "4xl" }}
              display={"inline-block"}
              fontWeight="lighter"
              sx={{
                "--animate-delay": "0.8s",
              }}
            >
              Software & ML/AI Engineer
            </Text>
          </Box>

          <Text
            fontSize={{ base: "md", md: "lg", "2xl": "xl" }}
            maxW={{ base: "600px", "2xl": "800px" }}
            color="gray.400"
            lineHeight="tall"
            mt={{ base: 4, md: 6 }}
            className="animate__animated animate__fadeIn"
            sx={{
              "--animate-delay": "1.2s",
            }}
          >
            Hey! I build cool stuff with code and recently started tinkering
            with AI. From crafting rock-solid web apps to teaching machines new
            tricks, I love turning complex problems into elegant solutions.
            <Flex align="center" gap={0} display="inline-flex">
              Stick around to see what I'm cooking up!
              <Box
                w={{ base: "60px", sm: "70px", md: "85px" }}
                h={{ base: "60px", sm: "70px", md: "85px" }}
                mt={{ base: -3, md: -5 }}
                ml={{ base: -2, md: -3 }}
              >
                <Lottie
                  animationData={cookingAnimation}
                  loop={true}
                  autoplay={true}
                />
              </Box>
            </Flex>
          </Text>
          <Box
            mt={{ base: 8, md: 10 }}
            mb={{ base: 6, md: 8 }}
            maxW={{ base: "600px", "2xl": "800px" }}
          >
            <TerminalEffect />
          </Box>
        </Flex>

        <Flex
          flex="1"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            width="100%"
            height="100%"
            maxH="600px"
          >
            <AIInteractive />
          </Box>
        </Flex>
      </Flex>

      <Socials />
    </motion.div>
  );
};

export default Home;
