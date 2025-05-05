import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { TJob } from '../../types/job.type';
import { TProject } from '../../types/project.type';

interface AdminDashboardProps {
  experiences: TJob[];
  projects: TProject[];
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  experiences, 
  projects 
}) => {
  return (
    <Box 
      bg="whiteAlpha.50" 
      backdropFilter="blur(10px)" 
      borderRadius="md" 
      p={6} 
      border="1px solid" 
      borderColor="whiteAlpha.200"
    >
      <Heading size="md" mb={4} color="white">Dashboard</Heading>
      <Text color="gray.300">Welcome to your portfolio admin panel. Use the sidebar to navigate between different sections.</Text>
      
      <Box mt={8}>
        <Heading size="sm" mb={3} color="#64ffda">Quick Stats</Heading>
        <Flex gap={4} flexWrap="wrap">
          <Box 
            p={4} 
            bg="whiteAlpha.100" 
            borderRadius="md" 
            flex="1"
            minW="200px"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Text color="gray.400" fontSize="sm">Total Projects</Text>
            <Text color="white" fontSize="2xl">{projects.length}</Text>
          </Box>
          <Box 
            p={4} 
            bg="whiteAlpha.100" 
            borderRadius="md" 
            flex="1"
            minW="200px"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Text color="gray.400" fontSize="sm">Total Experiences</Text>
            <Text color="white" fontSize="2xl">{experiences.length}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};