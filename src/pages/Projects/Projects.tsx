import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ScrollToTop from "../../components/ScrollToTop";

const Projects = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("projects");
      if (!container) return;

      const isAtBottom =
        container.scrollHeight - container.scrollTop == container.clientHeight;

      setShowScrollToTop(isAtBottom);
    };

    const container = document.getElementById("projects");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
        {showScrollToTop && (
          <Box
            as="button"
            onClick={handleScrollToTop}
            className="animate__animated animate__fadeIn"
            _hover={{
              cursor: "pointer",
              backgroundColor: "gray.700",
              borderRadius: "70%",
            }}
            boxSize={"2rem"}
          >
            <ScrollToTop />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Projects;
