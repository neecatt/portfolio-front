import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      
      if (success) {
        toast({
          title: 'Login successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/admin');
      } else {
        toast({
          title: 'Invalid credentials',
          description: 'Please check your username and password',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'An error occurred during login',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex 
      minH="calc(100vh - 3.8rem)" 
      align="center" 
      justify="center"
      color="white"
    >
      <Box 
        w="100%" 
        maxW="400px" 
        p={6} 
        borderRadius="md" 
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <Heading size="lg" mb={6} textAlign="center" color="#64ffda">
          Admin Login
        </Heading>
        
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel color="gray.300">Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
              required
            />
          </FormControl>
          
          <FormControl mb={6}>
            <FormLabel color="gray.300">Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _focus={{ borderColor: "#64ffda", boxShadow: "0 0 0 1px #64ffda" }}
              _hover={{ borderColor: "whiteAlpha.400" }}
              required
            />
          </FormControl>
          
          <Button
            type="submit"
            w="100%"
            colorScheme="teal"
            bg="#64ffda"
            color="black"
            _hover={{ bg: "#52d8b9" }}
            isLoading={isLoading}
            loadingText="Logging in"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;