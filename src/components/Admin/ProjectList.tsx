import React from "react";
import { Box, Flex, Text, Heading, IconButton, Tag } from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TProject } from "../../types/project.type";

interface ProjectListProps {
  projects: TProject[];
  handleEditProject: (proj: TProject, id: number) => void;
  handleDeleteProject: (id: number) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  handleEditProject,
  handleDeleteProject,
}) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Box mt={8}>
      <Heading size="sm" mb={3} color="#64ffda">
        Current Projects
      </Heading>
      <Flex direction="column" gap={3}>
        {projects.map((project, index) => (
          <Box
            key={index}
            p={4}
            bg="whiteAlpha.100"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Flex justify="space-between" align="center" mb={2}>
              <Text color="white" fontWeight="medium">
                {project.title}
              </Text>
              <Flex align="center" gap={2}>
                <Tag size="sm" colorScheme="teal" variant="subtle">
                  {typeof project.category === "object" &&
                  project.category !== null
                    ? project.category.name
                    : project.category}
                </Tag>
                <IconButton
                  aria-label="Edit project"
                  icon={<FiEdit2 />}
                  size="sm"
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => project.id !== undefined && handleEditProject(project, project.id)}
                />
                <IconButton
                  aria-label="Delete project"
                  icon={<FiTrash2 />}
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => project.id !== undefined && handleDeleteProject(project.id)}
                />
              </Flex>
            </Flex>
            <Text color="gray.400" fontSize="sm" mb={2}>
              {project.description}
            </Text>
            <Flex wrap="wrap" gap={1}>
              {project.techStack &&
                project.techStack.map((tech, techIndex) => {
                  const techName =
                    typeof tech === "object" && tech !== null
                      ? tech.name
                      : tech;
                  return (
                    <Tag
                      key={techIndex}
                      size="sm"
                      colorScheme="gray"
                      variant="subtle"
                    >
                      {techName}
                    </Tag>
                  );
                })}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
