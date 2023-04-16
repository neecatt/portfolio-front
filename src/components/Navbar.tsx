import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import borderBottomExpand from "../props/borderBottomExpand";

const Navbar: React.FC = () => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldHideNavbar = prevScrollPos < currentScrollPos;

      setHideNavbar(shouldHideNavbar);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    >
      <Button
        fontWeight={"light"}
        bg={"transparent"}
        {...borderBottomExpand}
        borderBottom={activeButton === "Projects" ? "1px solid  white" : "none"}
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
        {...borderBottomExpand}
        borderBottom={activeButton === "Resume" ? "1px solid white" : "none"}
        onClick={() => setActiveButton("Resume")}
      >
        Resume
      </Button>
    </Flex>
  );
};

export default Navbar;
