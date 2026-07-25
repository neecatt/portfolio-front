// @ts-nocheck
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Button, Container, Flex, Heading, Spinner, Tag, Text } from "@chakra-ui/react";
import { TProject } from "../../types/project.type";
import { apiService } from "../../services/api.service";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<TProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getProjects().then((projects) => {
      setProject(projects.find((item) => (item.slug || String(item.id)) === slug) || null);
    }).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Flex minH="70vh" align="center" justify="center"><Spinner color="#64ffda" size="xl" /></Flex>;
  if (!project) return <Container py={32}><Heading>Project not found</Heading><Button as={RouterLink} to="/projects" mt={6} colorScheme="teal">Back to projects</Button></Container>;

  return (
    <Container maxW="1000px" py={{ base: 20, md: 28 }}>
      <Button as={RouterLink} to="/projects" variant="ghost" color="#64ffda" mb={8}>← All projects</Button>
      {project.thumbnail && <Box as="img" src={project.thumbnail} alt={project.title} className="project-hero-image" mb={10} />}
      <Text className="eyebrow">{typeof project.category === "string" ? project.category : project.category?.name}</Text>
      <Heading size="2xl" mt={3} mb={5}>{project.title}</Heading>
      <Text color="gray.300" fontSize="xl" lineHeight="tall" maxW="760px">{project.description}</Text>
      <Flex wrap="wrap" gap={2} mt={6}>{project.techStack.map((tech, index) => <Tag key={index} colorScheme="teal">{typeof tech === "string" ? tech : tech.name}</Tag>)}</Flex>
      <Box className="case-study-grid" mt={16}>
        {project.role && <Box><Text className="eyebrow">Role</Text><Text mt={2} color="gray.300">{project.role}</Text></Box>}
        {project.challenge && <Box><Text className="eyebrow">Challenge</Text><Text mt={2} color="gray.300">{project.challenge}</Text></Box>}
        {project.solution && <Box><Text className="eyebrow">Solution</Text><Text mt={2} color="gray.300">{project.solution}</Text></Box>}
        {!!project.outcomes?.length && <Box><Text className="eyebrow">Outcomes</Text><Box as="ul" mt={2} pl={5} color="gray.300">{project.outcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}</Box></Box>}
      </Box>
      {!!project.media?.length && <Box mt={16} className="media-grid">{project.media.map((media) => <Box key={media.id || media.key} as="img" src={media.key} alt={media.altText || project.title} loading="lazy" />)}</Box>}
      <Flex gap={4} mt={12}>
        {project.githubLink && <Button as="a" href={project.githubLink} target="_blank" rel="noreferrer" variant="outline" colorScheme="teal">View source</Button>}
        {project.websiteLink && <Button as="a" href={project.websiteLink} target="_blank" rel="noreferrer" colorScheme="teal">Visit project</Button>}
      </Flex>
    </Container>
  );
};

export default ProjectDetail;
