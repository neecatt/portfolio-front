import "animate.css";
import { Box, Text } from "@chakra-ui/react";

function StartScreen() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      backgroundColor={"black"}
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
    </Box>
  );
}

export default StartScreen;
