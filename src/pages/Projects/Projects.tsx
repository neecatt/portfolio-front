import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  Spinner,
  Center,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProjectCard, ScrollToTop } from "../../components";
import { TProject } from "../../types/project.type";
import getProjects from "../../api/getProjects";

const Projects = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [projects, setProjects] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const aiProjects = projects.filter((project) => {
    const category = project.category;
    if (typeof category === "object" && category !== null) {
      return category.name === "AI";
    }
    return category === "AI";
  });

  const fullstackProjects = projects.filter((project) => {
    if (typeof project.category === "object" && project.category !== null) {
      return project.category.name === "Full-Stack";
    }
    return project.category === "Full-Stack";
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        className="animate__animated animate__fadeIn"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#64ffda"
          size="xl"
        />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        flexDirection="column"
        className="animate__animated animate__fadeIn"
      >
        <Text color="red.400" fontSize="xl" mb={4}>
          {error}
        </Text>
        <Text color="gray.400">
          Please check your connection and try again.
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      minH="100vh"
      pt={{ base: 16, md: 24 }}
      pb={16}
      mb={{ base: 4, md: 8 }}
      className="animate__animated animate__fadeIn"
      overflowX="hidden"
      id="projects-container"
    >
      <Tabs
        variant="soft-rounded"
        colorScheme="teal"
        width="100%"
        maxW="1200px"
        isLazy
        px={{ base: 2, md: 6 }}
      >
        <TabList
          mb={{ base: 4, md: 8 }}
          justifyContent="center"
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
          pb={4}
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: 2, sm: 0 }}
        >
          <Tab
            _selected={{
              color: "#64ffda",
              bg: "whiteAlpha.100",
            }}
            mx={2}
          >
            Full-Stack Development
          </Tab>
          <Tab
            _selected={{
              color: "#64ffda",
              bg: "whiteAlpha.100",
            }}
            mx={2}
          >
            AI & Machine Learning
          </Tab>
        </TabList>

        <TabPanels
          overflowY="auto"
          overflowX="hidden"
          height={{ base: "calc(100vh - 200px)", md: "calc(100vh - 200px)" }}
          pb={{ base: 8, md: 12 }}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          }}
        >
          <TabPanel px={0}>
            {fullstackProjects.length > 0 ? (
              <Box
                className="projects-grid"
                display="grid"
                gridTemplateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={{ base: 3, md: 6, lg: 8 }}
                pb={{ base: 12, md: 16 }}
                id="fullstack-section"
              >
                {fullstackProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </Box>
            ) : (
              <Center py={10}>
                <Text color="gray.400">No full-stack projects available.</Text>
              </Center>
            )}
          </TabPanel>

          <TabPanel px={0}>
            {aiProjects.length > 0 ? (
              <Container
                maxW={{ base: "container.lg", "2xl": "container.xl" }}
                px={{ base: 4, lg: 8, "2xl": 12 }}
                display="grid"
                gridTemplateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={{ base: 4, md: 6, lg: 8 }}
                pb={{ base: 12, md: 16 }}
                id="ai-section"
              >
                {aiProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </Container>
            ) : (
              <Center py={10}>
                <Text color="gray.400">No AI projects available.</Text>
              </Center>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>

      {showScrollToTop && (
        <Box
          position="fixed"
          bottom={8}
          right={8}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          cursor="pointer"
          opacity={0.8}
          _hover={{ opacity: 1 }}
        >
          <ScrollToTop />
        </Box>
      )}
    </Flex>
  );
};

export default Projects;
