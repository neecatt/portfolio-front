import { ArrowUpIcon } from "@chakra-ui/icons";
import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ScrollToTop from "../../components/ScrollToTop";

const Projects = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const container = document.getElementById("projects");
    if (!container) return;
    container.addEventListener("scroll", () => {
      if (container.scrollTop > 400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
  });

  const handleScrollToTop = () => {
    const container = document.getElementById("projects");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={{ sm: "10%", base: "88%", md: "40%" }}
      margin={"8em auto"}
      height={"36em"}
    >
      <Flex
        id="projects"
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        overflow={"auto"}
        gap={3}
        p={"1em"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Flex>
      <Flex mb={"1rem"} justifyContent={"center"} w={"100%"}>
        <Box
          as="button"
          onClick={handleScrollToTop}
          className={`animate__animated ${
            showScrollToTop ? "animate__fadeIn" : "animate__fadeOut"
          }`}
          style={{
            opacity: showScrollToTop ? 1 : 0,
            cursor: showScrollToTop ? "pointer" : "default",
          }}
          _hover={{
            cursor: "pointer",
            backgroundColor: "gray.700",
            borderRadius: "70%",
          }}
          boxSize={"2rem"}
        >
          <ScrollToTop />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Projects;
