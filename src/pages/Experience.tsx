import { Box, Flex } from "@chakra-ui/react";
import TimelineStep from "../components/TimelineStep";
import { TJob } from "../types/job.type";

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
        {jobs.map((job: TJob, index: number) => (
          <Box
            className={
              index % 2 === 0
                ? "animate__animated animate__fadeInLeft animate__delay-1s"
                : "animate__animated animate__fadeInRight animate__delay-1s"
            }
            key={index}
            sx={{
              "--animate-delay": `${index * 0.3}s`,
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
