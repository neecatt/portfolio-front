import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <Box 
      w={{ base: "100%", lg: "250px",  }} 
      bg="whiteAlpha.50" 
      backdropFilter="blur(10px)" 
      border="1px solid" 
      borderColor="whiteAlpha.200"
      borderRadius="md"
      p={6}
      h="81%"
      m={4}
      mb={8}
      position="sticky"
      top={4}
    >
      <Flex direction="column" align="center" mb={6}>
        <Box 
          w="80px" 
          h="80px" 
          borderRadius="full" 
          bg="#64ffda" 
          mb={2} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          fontSize="2xl"
          color="black"
          fontWeight="bold"
        >
          A
        </Box>
        <Text color="white" fontWeight="medium">Admin</Text>
      </Flex>
      
      <Flex direction="column" gap={3}>
        <Button 
          variant={activeSection === "dashboard" ? "solid" : "outline"}
          colorScheme={activeSection === "dashboard" ? "teal" : "whiteAlpha"}
          borderColor="whiteAlpha.300"
          onClick={() => setActiveSection("dashboard")}
          _hover={{ bg: activeSection === "dashboard" ? "" : "whiteAlpha.200" }}
          fontFamily="mono"
        >
          Dashboard
        </Button>
        <Button 
          variant={activeSection === "experience" ? "solid" : "outline"}
          colorScheme={activeSection === "experience" ? "teal" : "whiteAlpha"}
          borderColor="whiteAlpha.300"
          onClick={() => setActiveSection("experience")}
          _hover={{ bg: activeSection === "experience" ? "" : "whiteAlpha.200" }}
          fontFamily="mono"
        >
          Experience
        </Button>
        <Button 
          variant={activeSection === "projects" ? "solid" : "outline"}
          colorScheme={activeSection === "projects" ? "teal" : "whiteAlpha"}
          borderColor="whiteAlpha.300"
          onClick={() => setActiveSection("projects")}
          _hover={{ bg: activeSection === "projects" ? "" : "whiteAlpha.200" }}
          fontFamily="mono"
        >
          Projects
        </Button>
        <Button 
          variant={activeSection === "resume" ? "solid" : "outline"}
          colorScheme={activeSection === "resume" ? "teal" : "whiteAlpha"}
          borderColor="whiteAlpha.300"
          onClick={() => setActiveSection("resume")}
          _hover={{ bg: activeSection === "resume" ? "" : "whiteAlpha.200" }}
          fontFamily="mono"
        >
          Resume
        </Button>
      </Flex>
    </Box>
  );
};