import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Socials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    console.log("clicked");
  };

  return (
    <Flex
      position="fixed"
      bottom="0"
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
        _hover={{ bg: "linkedin.500" }}
        onClick={handleDropdownClick}
        href="https://www.facebook.com/nijatabdullazada/" //open in new tab
        target="_blank"
      >
        <FaFacebook color="white" size={30} />
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
