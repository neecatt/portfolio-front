import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Socials = () => {
  const bottomPosition = useBreakpointValue({ base: "0", md: "20px" });

  return (
    <Flex
      position="fixed"
      bottom={bottomPosition}
      right="0"
      zIndex={99}
      justifyContent="space-between"
      className="animate__animated animate__fadeIn animate__delay-1s"
      w="15rem"
      gap={4}
      py={6}
      px={6}
    >
      <Button
        as={"a"}
        bg={"transparent"}
        _hover={{ bg: "#0077B5" }}
        href="https://www.linkedin.com/in/nijatabdullazada/"
        target="_blank"
      >
        <FaLinkedin color="white" size={30} />
      </Button>
      <Button
        as="a"
        bg={"transparent"}
        _hover={{ bg: "gray.500" }}
        href="https://www.github.com/neecatt/"
        target="_blank"
      >
        <FaGithub color="white" size={30} />
      </Button>
      <Button
        as={"a"}
        bg={"transparent"}
        _hover={{
          bgGradient: "linear-gradient(135deg, #dd2a7b 0%, #f58529 100%)",
        }}
        href="https://www.instagram.com/nee.catt/"
        target="_blank"
      >
        <FaInstagram color="white" size={30} />
      </Button>
    </Flex>
  );
};

export default Socials;
