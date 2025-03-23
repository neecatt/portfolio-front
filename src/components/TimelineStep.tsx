import React from "react";
import { TJob } from "../types/job.type";
import { Box } from "@chakra-ui/react";

interface ITimelineProps {
  job: TJob;
}

const TimelineStep: React.FC<ITimelineProps> = ({ job }) => {
  return (
    <Box
      p={6}
      borderRadius="md"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "whiteAlpha.300",
        bg: "whiteAlpha.100",
      }}
    >
      <Box maxW="100%">
        <time className="mb-2 block text-sm font-normal text-gray-400">
          {job.date}
          {job.latest && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          )}
        </time>
        <h3 className="text-lg font-normal text-gray-400 mb-1">
          @{job.companyName}
        </h3>
        <h3 className="text-sm font-semibold text-[#64ffda] mb-3">
          {job.jobTitle}
        </h3>
        {Array.isArray(job.description) ? (
          <ul className="text-sm font-normal text-gray-500 list-disc pl-5 mt-2 space-y-1">
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm font-normal text-gray-500">{job.description}</p>
        )}
      </Box>
    </Box>
  );
};

export default TimelineStep;
