import React from 'react';
import { Box, Flex, Text, Input, Textarea, Select, Button, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { TProject } from '../../types/project.type';

interface ProjectFormProps {
  projectForm: TProject;
  techInput: string;
  handleProjectChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  setTechInput: (value: string) => void;
  addTechItem: () => void;
  removeTechItem: (item: string) => void;
  submitProject: (e: React.FormEvent) => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  projectForm,
  techInput,
  handleProjectChange,
  setTechInput,
  addTechItem,
  removeTechItem,
  submitProject
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
      <Box as="form" onSubmit={submitProject}>
        <Flex direction="column" gap={4}>
          <Box>
            <Text color="gray.300" mb={1}>Project Title</Text>
            <Input 
              name="title"
              value={projectForm.title}
              onChange={handleProjectChange}
              placeholder="Portfolio Website"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
              required
            />
          </Box>
          
          <Box>
            <Text color="gray.300" mb={1}>Description</Text>
            <Textarea 
              name="description"
              value={projectForm.description}
              onChange={handleProjectChange}
              placeholder="Describe your project..."
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
              minH="120px"
              required
            />
          </Box>
          
          <Box>
            <Text color="gray.300" mb={1}>GitHub Link</Text>
            <Input 
              name="githubLink"
              value={projectForm.githubLink}
              onChange={handleProjectChange}
              placeholder="https://github.com/username/project"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
            />
          </Box>
          
          <Box>
            <Text color="gray.300" mb={1}>Website Link</Text>
            <Input 
              name="websiteLink"
              value={projectForm.websiteLink}
              onChange={handleProjectChange}
              placeholder="https://myproject.com"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
            />
          </Box>
          
          <Box>
            <Text color="gray.300" mb={1}>Category</Text>
            <Select 
              name="category"
              value={projectForm.category}
              onChange={handleProjectChange}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
            >
              <option value="Full-Stack">Full-Stack</option>
              <option value="AI">AI</option>
            </Select>
          </Box>
          
          <Box>
            <Text color="gray.300" mb={1}>Tech Stack</Text>
            <Flex mb={2}>
              <Input 
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="React"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
                _hover={{ borderColor: "whiteAlpha.400" }}
                mr={2}
              />
              <Button 
                onClick={addTechItem}
                colorScheme="teal"
                bg="#64ffda"
                color="black"
                _hover={{ bg: "#52d8b9" }}
              >
                Add
              </Button>
            </Flex>
            
            <Flex wrap="wrap" gap={2} mt={2}>
              {projectForm.techStack.map((tech, index) => {
                const techName = typeof tech === 'string' ? tech : tech.name;
                return (
                  <Tag key={index} size="md" borderRadius="full" variant="subtle" colorScheme="teal">
                    <TagLabel>{techName}</TagLabel>
                    <TagCloseButton onClick={() => removeTechItem(techName)} />
                  </Tag>
                );
              })}
            </Flex>
          </Box>
          
          <Button 
            type="submit" 
            colorScheme="teal" 
            bg="#64ffda" 
            color="black"
            _hover={{ bg: "#52d8b9" }}
            alignSelf="flex-start"
            mt={2}
          >
            Add Project
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};