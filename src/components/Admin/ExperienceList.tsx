// @ts-nocheck
import React from 'react';
import { Box, Flex, Text, Heading, IconButton } from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { TJob } from '../../types/job.type';
import { ContentOrderEditor } from './ContentOrderEditor';

interface ExperienceListProps {
  experiences: TJob[];
  handleEditExperience: (exp: TJob, id: number) => void;
  handleDeleteExperience: (id: number) => void;
  reorderExperiences: (experiences: TJob[]) => Promise<void>;
}

export const ExperienceList: React.FC<ExperienceListProps> = ({
  experiences,
  handleEditExperience,
  handleDeleteExperience,
  reorderExperiences
}) => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Box mt={8}>
      <Heading size="sm" mb={3} color="#64ffda">Current Experiences</Heading>
      <ContentOrderEditor items={experiences} saveOrder={reorderExperiences} />
      <Flex direction="column" gap={3} mt={5} pb={8}>
        {experiences.map((exp, index) => (
          <Box 
            key={exp.id}
            p={4}
            bg="whiteAlpha.100"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Box>
              <Flex justify="space-between" align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} gap={3} mb={3}>
                <Box minW={0}>
                  <Text color="white" fontWeight="medium" noOfLines={1}>{exp.jobTitle}</Text>
                  <Text color="gray.400" fontSize="sm" noOfLines={1}>@{exp.companyName} • {exp.date}</Text>
                </Box>
                <Flex align="center" gap={2} flexShrink={0}>
                  <IconButton
                    aria-label="Edit experience"
                    icon={<FiEdit2 />}
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => handleEditExperience(exp, exp.id || 0)}
                  />
                  <IconButton
                    aria-label="Delete experience"
                    icon={<FiTrash2 />}
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => handleDeleteExperience(exp.id || 0)}
                  />
                </Flex>
              </Flex>
              <Flex direction="column" gap={1}>
                {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((item, descriptionIndex) => (
                  <Text key={descriptionIndex} color="gray.400" fontSize="sm">• {item}</Text>
                ))}
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
