import React, { useState } from 'react';
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalCloseButton,
  Box,
  Flex,
  Text,
  Input,
  Select,
  Button,
  Tag,
  TagLabel,
  TagCloseButton
} from '@chakra-ui/react';
import { TJob } from '../../types/job.type';

interface EditExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experienceForm: TJob;
  handleExperienceChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  updateExperience: (e: React.FormEvent) => void;
}

export const EditExperienceModal: React.FC<EditExperienceModalProps> = ({
  isOpen,
  onClose,
  experienceForm,
  handleExperienceChange,
  updateExperience
}) => {
  const [descriptionInput, setDescriptionInput] = useState('');
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900" borderColor="whiteAlpha.200" borderWidth="1px">
        <ModalHeader color="white">Edit Experience</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Box as="form" onSubmit={updateExperience}>
            <Flex direction="column" gap={4}>
              <Box>
                <Text color="gray.300" mb={1}>Job Title</Text>
                <Input 
                  name="jobTitle"
                  value={experienceForm.jobTitle}
                  onChange={handleExperienceChange}
                  placeholder="Senior Developer"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                  required
                />
              </Box>
              
              <Box>
                <Text color="gray.300" mb={1}>Company Name</Text>
                <Input 
                  name="companyName"
                  value={experienceForm.companyName}
                  onChange={handleExperienceChange}
                  placeholder="Tech Company Inc."
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                  required
                />
              </Box>
              
              <Box>
                <Text color="gray.300" mb={1}>Date</Text>
                <Input 
                  name="date"
                  value={experienceForm.date}
                  onChange={handleExperienceChange}
                  placeholder="2020 - Present"
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
                <Flex mb={2}>
                  <Input
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                    placeholder="Enter a responsibility or achievement"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
                    _hover={{ borderColor: "whiteAlpha.400" }}
                    mr={2}
                  />
                  <Button
                    onClick={() => {
                      if (descriptionInput.trim()) {
                        const syntheticEvent = {
                          target: {
                            name: 'description',
                            value: [...experienceForm.description, descriptionInput.trim()]
                          }
                        };
                        handleExperienceChange(syntheticEvent as any);
                        setDescriptionInput('');
                      }
                    }}
                    colorScheme="teal"
                    bg="#64ffda"
                    color="black"
                    _hover={{ bg: "#52d8b9" }}
                  >
                    Add
                  </Button>
                </Flex>
                
                <Flex wrap="wrap" gap={2} mt={2}>
                  {experienceForm.description.map((desc, index) => (
                    <Tag key={index} size="md" borderRadius="full" variant="subtle" colorScheme="teal">
                      <TagLabel>{desc}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          const syntheticEvent = {
                            target: {
                              name: 'description',
                              value: experienceForm.description.filter((_, i) => i !== index)
                            }
                          };
                          handleExperienceChange(syntheticEvent as any);
                        }}
                      />
                    </Tag>
                  ))}
                </Flex>
              </Box>
              
              <Box>
                <Text color="gray.300" mb={1}>Latest Position?</Text>
                <Select 
                  name="latest"
                  value={experienceForm.latest ? "true" : "false"}
                  onChange={handleExperienceChange}
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Select>
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
                Update Experience
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};