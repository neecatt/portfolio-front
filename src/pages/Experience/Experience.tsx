import { Box, Flex } from "@chakra-ui/react";
import { TimelineStep } from "../../components";
import { TJob } from "../../types/job.type";
import { useEffect, useState } from "react";
import getExperiences from "../../api/getExperiences";
import "./Experience.css";

const Experience = () => {
  const [jobs, setJobs] = useState<TJob[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const jobs = await getExperiences();
      setJobs(jobs);
    };

    fetchExperiences();
  }, []);

  // const jobs = [
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  //   {
  //     jobTitle: "Software Developer",
  //     companyName: "Morpho",
  //     date: "Jun 2023 - Present",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     latest: true,
  //   },
  // ];

  return (
    <div className="flex justify-center items-center w-auto h-[80vh] overflow-y-auto flex-wrap mt-[5em] p-[1em]">
      <div className="jobsList">
        <ol>
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
      </div>
    </div>
  );
};

export default Experience;
