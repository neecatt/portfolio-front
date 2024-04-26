import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../../components";
import { ScrollToTop } from "../../components";
import { TProject } from "../../types/project.type";

const Projects = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const container = document.getElementById("projects");
    if (!container) return;
    container.addEventListener("scroll", () => {
      console.log(container.scrollTop);
      if (container.scrollTop > 200) {
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

  const projects: TProject[] = [
    {
      title: "Portfolio",
      description: "Oz saytim",
      techStack: ["nest.js", "react.js", "redis"],
    },
    {
      title: "Portfolio2",
      description: "Oz saytim",
      techStack: ["nest.js", "react.js", "redis"],
      githubLink: "https://google.com",
    },
    {
      title: "Portfolio3",
      description: "Oz saytim",
      techStack: [
        "nest.js",
        "react.js",
        "redis",
        "nest.js",
        "react.js",
        "redis",
      ],
    },
    {
      title: "Portfolio3",
      description: "Oz saytim",
      techStack: [
        "nest.js",
        "react.js",
        "redis",
        "nest.js",
        "react.js",
        "redis",
      ],
    },
    {
      title: "Portfolio3",
      description: "Oz saytim",
      techStack: [
        "nest.js",
        "react.js",
        "redis",
        "nest.js",
        "react.js",
        "redis",
      ],
    },
    {
      title: "Portfolio3",
      description: "Oz saytim",
      techStack: [
        "nest.js",
        "react.js",
        "redis",
        "nest.js",
        "react.js",
        "redis",
      ],
    },
  ];

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
        {projects.map((project: TProject, index: number) => {
          return <ProjectCard key={index} project={project} />;
        })}
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
