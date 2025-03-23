import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export const TerminalEffect = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const terminalTexts = [
    {
      command: "ml_skills.list()",
      response: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Deep Learning",
        "NLP",
        "MLOps",
        "CUDA",
        "Hugging Face",
        "Transformers",
      ],
    },
    {
      command: "software_skills.list()",
      response: [
        "Java",
        "TypeScript",
        "Python",
        "React",
        "Node.js",
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Git",
        "REST APIs",
        "GraphQL",
        "My/PostgreSQL",
      ],
    },
    {
      command: "ml_experience.get()",
      response: [
        "Fine-tuned Speech-to-Text transformer models",
        "Optimized model inference performance",
        "Developed Content-Based Recommendation System",
        "Developed a RAG system for Law Enforcement Chatbot",
      ],
    },
    {
      command: "software_experience.get()",
      response: [
        "Designed database schema from scratch and developed a CRM LMS application from scratch",
        "Implemented CQRS architecture for a multi-tenant SaaS application",
        "Developed backend APIs and ensured proper CI/CD pipelines for an AI product",
      ],
    },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayText]);

  useEffect(() => {
    if (!isTyping || isComplete) return;

    const currentItem = terminalTexts[currentTextIndex];
    const fullText = `> ${currentItem.command}\n${currentItem.response
      .map((line) => `  ${line}`)
      .join("\n")}`;

    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      setIsTyping(false);
    }
  }, [displayText, isTyping, isComplete, currentTextIndex]);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % terminalTexts.length);
        setDisplayText("");
        setIsComplete(false);
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, terminalTexts.length]);

  return (
    <Box
      bg="rgba(0, 0, 0, 0.7)"
      borderRadius="md"
      p={4}
      border="1px solid"
      borderColor="whiteAlpha.300"
      _hover={{
        borderColor: "#64ffda",
        boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
      }}
      transition="all 0.3s ease"
      height="200px"
      overflowY="auto"
      ref={containerRef}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(0, 0, 0, 0.1)",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#64ffda",
          borderRadius: "2px",
        },
      }}
    >
      <Flex alignItems="center" mb={2}>
        <Box w="12px" h="12px" borderRadius="full" bg="red.400" mr={2}></Box>
        <Box w="12px" h="12px" borderRadius="full" bg="yellow.400" mr={2}></Box>
        <Box w="12px" h="12px" borderRadius="full" bg="green.400"></Box>
      </Flex>

      <Box
        fontFamily="monospace"
        fontSize="sm"
        color="gray.300"
        mt={2}
        ref={textRef}
      >
        <Text as="pre" whiteSpace="pre-wrap">
          {displayText}
          {showCursor && (
            <Box
              as="span"
              bg="#64ffda"
              display="inline-block"
              w="8px"
              h="16px"
              ml={1}
            />
          )}
        </Text>
      </Box>
    </Box>
  );
};
