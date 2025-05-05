import { Box, Flex, Heading, Link, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { TProject } from "../types/project.type";

interface IProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "whiteAlpha.300",
      }}
    >
      <Box p={{ base: 4, md: 6 }}>
        <Flex
          direction="column"
          height="100%"
          minH={{ base: "240px", md: "280px" }}
        >
          <Box flex="1">
            <Heading size="md" mb={2} color="gray.100">
              {project.title}
            </Heading>
            <Text color="gray.400" fontSize="sm" mb={4}>
              {project.description}
            </Text>
          </Box>

          <Box>
            <Flex gap={4} mb={4}>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  isExternal
                  color="gray.400"
                  _hover={{ color: "#64ffda" }}
                  transition="color 0.2s ease"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </Link>
              )}
              {project.websiteLink && (
                <Link
                  href={project.websiteLink}
                  isExternal
                  color="gray.400"
                  _hover={{ color: "#64ffda" }}
                  transition="color 0.2s ease"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
              )}
            </Flex>

            <Flex wrap="wrap" gap={2} minH="52px" alignItems="flex-start">
              {project.techStack.map((tech, index) => {
                const techName =
                  typeof tech === "object" && tech !== null ? tech.name : tech;
                return (
                  <Tag
                    key={index}
                    size="sm"
                    variant="subtle"
                    bg="whiteAlpha.200"
                    color="gray.300"
                  >
                    {techName}
                  </Tag>
                );
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;
