import React, { useState } from "react";
import { Flex, Center } from "@chakra-ui/react";
import borderBottomExpand from "../props/borderBottomExpand";
import borderBottomExpandResume from "../props/borderBottomExpandResume";
import { Link } from "react-router-dom";

const Navbar: React.FC = ({}) => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");
  return (
    <Flex
      as="nav"
      position={hideNavbar ? "fixed" : "absolute"}
      top={2}
      alignItems="center"
      right={0}
      gap={1}
      bg={hideNavbar ? "gray.100" : "transparent"}
      w="100%"
      justify="flex-end"
      py={2}
      px={4}
      boxShadow={hideNavbar ? "sm" : "none"}
      transition="all 0.2s ease-in-out"
      margin={"8 auto"}
    >
      <Center
        w={"4.5rem"}
        as={Link}
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "Home" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        to={"/"}
        py={2}
      >
        Home
      </Center>
      <Center
        w={"5rem"}
        as={Link}
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "Home" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        to={"/projects"}
        py={2}
      >
        Projects
      </Center>
      <Center
        w={"7rem"}
        as={Link}
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "Home" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        to={"/experience"}
        py={2}
      >
        Experience
      </Center>
      <Center
        w={"5rem"}
        as="a"
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpandResume}
        bgGradient="linear(to-r, #AE67FA, #F49867)"
        borderBottom={activeButton === "Home" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        href="https://drive.google.com/file/d/1wdUCG84FbZHRLil5XDB6l6tXg1UzKzX1/view?usp=sharing"
        py={2}
      >
        Resume
      </Center>
    </Flex>
  );
};

export default Navbar;
