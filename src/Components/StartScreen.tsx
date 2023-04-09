import React, { useEffect, useState } from "react";
import "animate.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function StartScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 3700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor={"black"}
      gap={4}
      className="animate__animated animate__fadeOut animate__delay-3s "
    >
      <Text
        fontWeight="light"
        fontSize="3xl"
        textColor="white"
        className="animate__animated animate__fadeOut animate__delay-2s"
      >
        Nijat Abdullazada
      </Text>
      <Text
        fontWeight="lighter"
        fontSize="3xl"
        textColor="white"
        className="animate__animated animate__fadeOut animate__delay-1s"
      >
        Portfolio
      </Text>
    </Box>
  );
}

export default StartScreen;
