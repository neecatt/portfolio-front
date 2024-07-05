import React from "react";
import { TJob } from "../types/job.type";

interface ITimelineProps {
  job: TJob;
}

const TimelineStep: React.FC<ITimelineProps> = ({ job }) => {
  return (
    <div className="max-w-80">
      <ol>
        <li className="mb-10 ms-4 max-w-[383px]">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 -left-[29px]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {job.date}
            {job.latest && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            )}
          </time>
          <h3 className="text-lg font-normal text-gray-400 dark:text-gray-500">
            @{job.companyName}
          </h3>
          <h3 className="text-sm   font-semibold text-[#64ffda] dark:text-white">
            {job.jobTitle}
          </h3>
          <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            {job.description}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineStep;
