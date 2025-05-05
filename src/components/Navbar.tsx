import React, { useState } from "react";
import { Flex, Center, useToast } from "@chakra-ui/react";
import borderBottomExpand from "../props/borderBottomExpand";
import borderBottomExpandResume from "../props/borderBottomExpandResume";
import { Link } from "react-router-dom";
import { useResume } from "../context/ResumeContext";
import { s3Service } from "../services/aws.service";
import { apiService } from "../services/api.service";

const Navbar: React.FC = ({}) => {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const { resumeUrl } = useResume();
  const toast = useToast();

  const handleResumeDownload = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isDownloading) return;

    try {
      setIsDownloading(true);

      const response = await apiService.getResumeUrl("1");
      const resumeKey = response.link;

      const signedUrl = await s3Service.getSignedUrl(resumeKey);

      const link = document.createElement("a");
      link.href = signedUrl;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download started",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download failed",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsDownloading(false);
    }
  };
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
        href={resumeUrl}
        onClick={handleResumeDownload}
        cursor="pointer"
        py={2}
      >
        {isDownloading ? "Loading..." : "Resume"}
      </Center>
    </Flex>
  );
};

export default Navbar;
