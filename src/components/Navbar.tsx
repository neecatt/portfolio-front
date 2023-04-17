import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import borderBottomExpand from "../props/borderBottomExpand";
import borderBottomExpandResume from "../props/borderBottomExpandResume";

const Navbar: React.FC = () => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");

  return (
    <Flex
      as="nav"
      position={hideNavbar ? "fixed" : "absolute"}
      top={0}
      right={0}
      bg={hideNavbar ? "gray.100" : "transparent"}
      w="100%"
      justify="flex-end"
      py={2}
      px={4}
      boxShadow={hideNavbar ? "sm" : "none"}
      transition="all 0.2s ease-in-out"
      zIndex={99}
      className="animate__animated animate__fadeIn animate__delay-2s"
    >
      <Button
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "Projects" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        onClick={() => setActiveButton("Projects")}
      >
        Projects
      </Button>
      <Button
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={
          activeButton === "Experience" ? "1px solid  white" : "none"
        }
        _active={{ bg: "transparent" }}
        onClick={() => setActiveButton("Experience")}
      >
        Experience
      </Button>
      <Button
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "About" ? "1px solid  white" : "none"}
        _active={{ bg: "transparent" }}
        onClick={() => setActiveButton("About")}
      >
        About
      </Button>
      <Button
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpandResume}
        _active={{ bg: "transparent" }}
        onClick={() => setActiveButton("Resume")}
        //give color lineargradient  #AE67FA #F49867 both 100%
        bgGradient="linear(to-r, #AE67FA, #F49867)"
      >
        Resume
      </Button>
    </Flex>
  );
};

export default Navbar;
