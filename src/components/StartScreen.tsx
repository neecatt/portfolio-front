import "animate.css";
import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
const StartScreen = () => {
  return (
    <Center w={"100vw"} h={"100vh"}>
      <Flex
        flexDirection="row"
        gap={4}
        className="animate__animated animate__fadeOut animate__delay-2s"
        sx={{
          "--animate-delay": "2.5s",
        }}
      >
        <Text
          fontWeight="light"
          fontSize="3xl"
          textColor="white"
          className="animate__animated animate__fadeOut animate__delay-1s"
          sx={{
            "--animate-delay": "1.6s",
          }}
        >
          Nijat Abdullazada
        </Text>
        <Text
          fontWeight="lighter"
          fontSize="3xl"
          textColor="white"
          className="animate__animated animate__fadeOut animate__delay animate__delay-1s"
          sx={{
            "--animation-duration": "1s",
            "--animate-delay": "1.3s",
          }}
        >
          Portfolio
        </Text>
      </Flex>
    </Center>
  );
};

export default React.memo(StartScreen);
