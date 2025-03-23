import React, { useState, useCallback } from "react";
import {
  Box,
  Text,
  useToast,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useResume } from "../../context/ResumeContext";
import { FiUpload } from "react-icons/fi";
import { uploadToS3 } from "../../services/aws.service";
import { useApi } from "../../hooks/useApi";

interface ResumeFormProps {}

interface DragState {
  isDragging: boolean;
  isValidFile: boolean;
}

export const ResumeForm: React.FC<ResumeFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    isValidFile: true,
  });
  const toast = useToast();
  const { updateResumeUrlState } = useResume();
  const { updateResumeUrl } = useApi();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.items[0];
    setDragState({
      isDragging: true,
      isValidFile: file.type === "application/pdf",
    });
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState({ isDragging: false, isValidFile: true });
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragState({ isDragging: false, isValidFile: true });

      const file = e.dataTransfer.files[0];
      if (file && file.type === "application/pdf") {
        await handleFileUpload(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    [toast]
  );

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    try {
      const s3Url = await uploadToS3(file);
      console.log(s3Url);
      await updateResumeUrl(1, s3Url);
      updateResumeUrlState(s3Url);
      toast({
        title: "Resume uploaded successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Failed to upload resume:", error);
      toast({
        title: "Error uploading resume",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      await handleFileUpload(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      borderRadius="md"
      p={6}
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <VStack spacing={6} align="stretch">
        <Box
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          bg={
            dragState.isDragging
              ? dragState.isValidFile
                ? "whiteAlpha.200"
                : "red.200"
              : "whiteAlpha.100"
          }
          p={10}
          borderRadius="md"
          border="2px dashed"
          borderColor={
            dragState.isDragging
              ? dragState.isValidFile
                ? "#64ffda"
                : "red.500"
              : "whiteAlpha.300"
          }
          textAlign="center"
          cursor="pointer"
          onClick={() => fileInputRef.current?.click()}
          transition="all 0.2s"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf"
            style={{ display: "none" }}
          />
          <Icon as={FiUpload} w={8} h={8} color="gray.300" mb={4} />
          <Text color="gray.300">
            {dragState.isDragging
              ? dragState.isValidFile
                ? "Drop your PDF here"
                : "Please upload a PDF file"
              : "Drag & drop your resume PDF here or click to browse"}
          </Text>
        </Box>

        <Box>
          <Text color="gray.300" fontSize="sm" mt={4} textAlign="center">
            Upload a new resume to replace the current one. The resume will be
            available for download from the navbar.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
