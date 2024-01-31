import { Box, Flex } from "@chakra-ui/react";
import TimelineStep from "../components/TimelineStep";

const Experience = () => {
  const jobs = [
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: true,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: true,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: true,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: false,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: false,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: false,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: false,
    },
    {
      jobTitle: "Software Developer",
      companyName: "Morpho",
      date: "Jun 2023 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latest: false,
    },
  ];

  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      width={"auto"}
      height={"80vh"}
      overflowY={"auto"}
      flexWrap={"wrap"}
      mt={"5em"}
      p={"1em"}
    >
      <ol
        className={`relative border-s  border-[#319880] dark:border-gray-700 max-w-[80%] md:max-w-[75%]`}
      >
        {jobs.map((job, i) => (
          <Box
            className={
              i % 2 === 0
                ? "animate__animated animate__fadeInLeft animate__delay-1s"
                : "animate__animated animate__fadeInRight animate__delay-1s"
            }
            key={i}
            sx={{
              "--animate-delay": `${i * 0.3}s`,
            }}
          >
            <TimelineStep job={job} />
          </Box>
        ))}
      </ol>
    </Flex>
  );
};

export default Experience;
