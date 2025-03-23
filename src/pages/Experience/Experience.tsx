import { Box, Container, Spinner, Flex, Text } from "@chakra-ui/react";
import { TimelineStep } from "../../components";
import { TJob } from "../../types/job.type";
import { useEffect, useState, useRef } from "react";
import getExperiences from "../../api/getExperiences";
import "./Experience.css";

const Experience = () => {
  const [jobs, setJobs] = useState<TJob[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const data = await getExperiences();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError("Failed to load experiences. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  if (loading) {
    return (
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        width="100%" 
        height="100vh"
        className="animate__animated animate__fadeIn"
      >
        <Spinner 
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#64ffda"
          size="xl"
        />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        width="100%" 
        height="100vh"
        flexDirection="column"
        className="animate__animated animate__fadeIn"
      >
        <Text color="red.400" fontSize="xl" mb={4}>{error}</Text>
        <Text color="gray.400">Please check your connection and try again.</Text>
      </Flex>
    );
  }

  return (
    <Container 
      maxW={{ base: "container.lg", "2xl": "container.xl" }}
      px={{ base: 4, lg: 8, "2xl": 12 }}
      h="100vh"
      position="relative"
      overflow="hidden"
      pt={{ base: 16, md: 24 }}
      pb={8}
      className={`${isVisible ? 'animate__animated animate__fadeIn' : ''}`}
      style={{ 
        visibility: isVisible ? 'visible' : 'hidden',
        animationDelay: '100ms' 
      }}
    >
      <Box 
        className="timeline-container"
        h="100%"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <Box 
          className="jobsList"
          minH="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          gap={6}
          pb={16}
        >
          {jobs.length > 0 ? (
            [...jobs].reverse().map((job: TJob, index: number) => (
              <Box
                key={index}
                className="timeline-item"
                flex="0 0 auto"
                minH="fit-content"
              >
                <TimelineStep job={job} />
              </Box>
            ))
          ) : (
            <Flex justifyContent="center" alignItems="center" h="200px">
              <Text color="gray.400">No experience data available.</Text>
            </Flex>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
