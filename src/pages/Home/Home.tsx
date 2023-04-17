import { Box, Flex, Img, Text, Wrap } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Socials from "../../components/Socials";
import borderBottomExpand from "../../props/borderBottomExpand";

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
                "--animate-delay": "1.4s",
              }}
            >
              Web Developer
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="end"
          alignItems="end"
          flexGrow={1}
          wrap="wrap"
          py={200}
          className="animate__animated animate__fadeIn animate__delay-3s"
        >
          <Box
            display={"inline-block"}
            alignSelf="center"
            fontSize={{ sm: "2xl", md: "3xl", base: "2xl" }}
            fontWeight="light"
            px={200}
          >
            About
          </Box>
          <Box
            display={"inline-block"}
            alignSelf="center"
            fontWeight={"lighter"}
            flexWrap="wrap"
            width={"55em"}
            fontSize={{ sm: "sm", md: "md", base: "sm" }}
            mt={4}
          >
            Hello! I'm Nijat Abdullazada, mainly backend, fullstack web
            developer with a passion for building beautiful and functional web
            applications. I have honed my skills in front-end development,
            back-end development, and everything in between. I specialize in
            working with modern web development frameworks and tools, including
            React, Nest.js, Node.js, and more, and I am always eager to learn
            and experiment with new technologies. If you want to work with me,
            you can contact via email:
          </Box>
          <Box
            as="a"
            alignSelf="center"
            justifySelf={"end"}
            position={"absolute"}
            bottom={"7rem"}
            href="mailto:nicatabdullazade135@gmail.com"
            {...borderBottomExpand}
          >
            Send Email
          </Box>
        </Flex>
        <Socials />
      </Flex>
    </>
  );
};

export default Home;
