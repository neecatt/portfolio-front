import React, { useState } from "react";
import { Flex, TabList, Tab } from "@chakra-ui/react";
import borderBottomExpand from "../props/borderBottomExpand";
import borderBottomExpandResume from "../props/borderBottomExpandResume";
import { useNavigate } from "react-router-dom";
interface NavbarProps {
  onChange: (index: number) => void;
  activeTab: number;
  onPageChange: (index: number) => void;
}

const Navbar: React.FC = ({}) => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");
  const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    setActiveButton("");
    setHideNavbar(false);
    navigate("/");
  };

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
      <TabList textDecoration={"none"} borderBottom={"none"}>
        <Tab
          fontWeight={"light"}
          bg={"transparent"}
          {...borderBottomExpand}
          borderBottom={activeButton === "Home" ? "1px solid  white" : "none"}
          onClick={() => {
            setActiveButton("Home");
            handleTabChange(0);
          }}
          _active={{ bg: "transparent" }}
        >
          Home
        </Tab>
        <Tab
          fontWeight={"light"}
          bg={"transparent"}
          onClick={() => {
            setActiveButton("Projects");
            handleTabChange(1);
          }}
          {...borderBottomExpand}
          borderBottom={
            activeButton === "Projects" ? "1px solid  white" : "none"
          }
          _active={{ bg: "transparent" }}
        >
          Projects
        </Tab>
        <Tab
          fontWeight={"light"}
          bg={"transparent"}
          {...borderBottomExpand}
          borderBottom={
            activeButton === "Experience" ? "1px solid  white" : "none"
          }
          _active={{ bg: "transparent" }}
        >
          Experience
        </Tab>

        <Tab
          as={"a"}
          fontWeight={"light"}
          bg={"transparent"}
          {...borderBottomExpandResume}
          _active={{ bg: "transparent" }}
          onClick={() => setActiveButton("Resume")}
          bgGradient="linear(to-r, #AE67FA, #F49867)"
        >
          Resume
        </Tab>
      </TabList>
    </Flex>
  );
};

export default Navbar;
