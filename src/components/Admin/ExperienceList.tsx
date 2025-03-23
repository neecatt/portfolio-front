import React from 'react';
import { Box, Flex, Text, Heading, IconButton } from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { TJob } from '../../types/job.type';

interface ExperienceListProps {
  experiences: TJob[];
  handleEditExperience: (exp: TJob, id: number) => void;
  handleDeleteExperience: (id: number) => void;
}

export const ExperienceList: React.FC<ExperienceListProps> = ({
  experiences,
  handleEditExperience,
  handleDeleteExperience
}) => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Box mt={8}>
      <Heading size="sm" mb={3} color="#64ffda">Current Experiences</Heading>
      <Flex direction="column" gap={3}>
        {experiences.map((exp, index) => (
          <Box 
            key={index}
            p={4}
            bg="whiteAlpha.100"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text color="white" fontWeight="medium">{exp.jobTitle}</Text>
                <Text color="gray.400" fontSize="sm">@{exp.companyName} • {exp.date}</Text>
                <Flex align="center" gap={2}>
                  <IconButton
                    aria-label="Edit experience"
                    icon={<FiEdit2 />}
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => handleEditExperience(exp, exp.id)}
                  />
                  <IconButton
                    aria-label="Delete experience"
                    icon={<FiTrash2 />}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => handleDeleteExperience(exp.id)}
                  />
                </Flex>
              </Box>
              <Text color="gray.400" fontSize="sm" mt={1}>{exp.description}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};