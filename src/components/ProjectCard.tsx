import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <Box
      width={{ base: "100%", md: "16rem" }}
      marginBottom="1rem"
      boxSizing="border-box"
    >
      <Card
        className="animate__animated animate__fadeIn animate__delay-1s"
        sx={{
          "--animate-delay": "0.2s",
        }}
        bg={"transparent"}
        as={motion.div}
        whileHover={{ y: -10 }}
        initial={{ y: 0 }}
        width="100%"
        height={"100%"}
        border="1px solid #333"
        borderRadius="0.5rem"
        overflow={"hidden"}
      >
        <CardHeader>
          <Heading color={"white"} size="md">
            Customer dashboard
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color={"gray"}>
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter gap={4} alignItems={"center"}>
          <Box
            as="a"
            color={"gray"}
            href="https://google.com"
            _hover={{
              color: "#64ffda",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <svg
              width={"20px"}
              height={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Box>
          <Box
            as="a"
            color={"gray"}
            _hover={{
              color: "#64ffda",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <svg
              width={"20px"}
              height={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProjectCard;
