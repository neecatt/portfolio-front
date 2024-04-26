import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import notfound from "../assets/animations/notfound.json";

const Error = () => {
  return (
    <Center
      width={"100vw"}
      height="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        height={"10rem"}
        width="80%"
        flexDir={{ sm: "row", base: "column" }}
        alignItems={"center"}
        mb={{ sm: "10rem", base: "20rem" }}
        mr={{ base: "2.5rem" }}
        zIndex={"100"}
        gap="5"
      >
        <Box width={{ sm: "50%" }}>
          <Lottie animationData={notfound} />
        </Box>

        <Text width={{ sm: "50%" }} fontSize="2xl" textAlign={"center"}>
          It looks like you're lost cowboy, why don't you use my navigation
          bar?¿
        </Text>
      </Flex>
      <Box></Box>
    </Center>
  );
};

export default Error;
